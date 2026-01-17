// Audio Generator for Chinese Dictation Practice
// Uses Google Translate's unofficial TTS endpoint (free, good quality)

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All vocabulary items organized by lesson
const lessons = [
  {
    id: 1,
    items: [
      "天气预报",
      "一个秘密",
      "美丽的小岛",
      "我刚刚做完功课。",
      "痛得忍不住哭了起来",
      "观看精彩的舞蹈表演",
      "这班一共有三十个学生。",
      "看新闻，了解国内外发生的事",
      "这部连续剧真好看，观众看得入迷了。",
      "看着妈妈一脸的疲倦，爸爸建议她休息一下。"
    ]
  },
  {
    id: 2,
    items: [
      "表示感谢",
      "温暖的阳光",
      "妹妹最爱吃苹果。",
      "讨论词语的意思",
      "姑姑递给我一串鱼丸。",
      "挤在一起，靠得紧紧的",
      "姐姐担心地问我怕不怕黑。",
      "天空乌云密布，然后下起了倾盆大雨。",
      "哥哥忽然灵机一动，想出了一个好办法。",
      "妈妈买了帽子和外套，我买了小鼓和烟花棒。"
    ]
  },
  {
    id: 3,
    items: [
      "尊敬长辈",
      "三更半夜",
      "有人在街上跳舞。",
      "小偷被警察抓住了。",
      "我的眼泪忍不住落了下来。",
      "老婆婆煮了一碗云吞面给我。",
      "我很后悔，不应该跟妈妈发脾气。",
      "丽丽从来没有补习，但功课都很好。",
      "大家都睁大眼睛看看发生了什么事。",
      "小安最近迷上了看书，都舍不得放手。"
    ]
  },
  {
    id: 4,
    items: [
      "皱眉头",
      "议论纷纷",
      "自己的责任",
      "不要影响其他同学上课",
      "在食堂吃饭要归还碗盘",
      "妈妈提醒我把房间打扫干净。",
      "我不该插队，以后我会注意。",
      "今天我值日，负责擦白板和关风扇。",
      "由于这道题很难，同学们谁都做不出来。",
      "听了你的劝告，我保证不会在阅读角落玩耍了。"
    ]
  },
  {
    id: 5,
    items: [
      "胆子小",
      "继续看书",
      "发烧了要吃药",
      "洗澡时不要戴眼镜",
      "妈妈建议我多运动。",
      "你别怕，打针一点也不痛。",
      "闭上眼睛，勇敢地伸出双手",
      "知道他没骗我，我松了一口气。",
      "体育课结束后，同学们都回到课室。",
      "因为视力变差了，所以他闷闷不乐。"
    ]
  },
  {
    id: 6,
    items: [
      "登台表演",
      "好久不见",
      "祝你身体健康",
      "分享一个好消息",
      "许多丰富的活动",
      "军人的训练十分辛苦。",
      "喜欢功夫就参加武术队",
      "老师欢迎我加入华乐团。",
      "妈妈鼓励我开始学习华族音乐。",
      "你真幸运，可以和机器人握手。"
    ]
  },
  {
    id: 7,
    items: [
      "接受批评",
      "节约用水",
      "悄悄离开",
      "你做错了事要道歉。",
      "羊群在山坡上吃草。",
      "小华拼命挤进图书馆。",
      "摇摆着胖乎乎、圆滚滚的身体",
      "听了他的劝告，我很不好意思。",
      "一位乘客走进车厢，随手把塑料袋丢在地上。",
      "我们要有秩序地排队，耐心等待，不要乱抢。"
    ]
  },
  {
    id: 8,
    items: [
      "了解情况",
      "获得表扬",
      "见义勇为",
      "小偷被抓住了。",
      "一个指挥交通，另一个救人",
      "一辆脚踏车飞快地向我冲过来。",
      "司机被困在车里，流了一点儿血。",
      "马路很危险，我们要遵守交通规则。",
      "警察到达现场，顺利把人救了出来。",
      "车祸发生后，我们要叫救护车和照顾伤者。"
    ]
  },
  {
    id: 9,
    items: [
      "组屋楼下",
      "讨厌吃辣的东西",
      "指着墙上的告示牌",
      "饮料摊可以买到糖果吗？",
      "我离开了其中的一间店。",
      "这家店的炸鸡美味可口。",
      "熟食中心为居民提供便利。",
      "我没听清楚，请你再说一遍。",
      "地铁上，请把座位让给盲人。",
      "你没考好不是因为笨，而是因为不专心。"
    ]
  }
];

// Create audio directory
const audioDir = path.join(__dirname, 'audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir);
}

// Function to download TTS audio from Google Translate
function downloadAudio(text, outputPath) {
  return new Promise((resolve, reject) => {
    const encodedText = encodeURIComponent(text);
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=zh-CN&client=tw-ob&q=${encodedText}`;

    const file = fs.createWriteStream(outputPath);

    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    }, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        https.get(response.headers.location, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
          }
        }, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      } else if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

// Sleep function for rate limiting
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function
async function generateAllAudio() {
  console.log('Starting audio generation...\n');

  let totalGenerated = 0;
  let totalFailed = 0;

  for (const lesson of lessons) {
    const lessonDir = path.join(audioDir, `lesson${lesson.id}`);
    if (!fs.existsSync(lessonDir)) {
      fs.mkdirSync(lessonDir);
    }

    console.log(`\nLesson ${lesson.id}:`);

    for (let i = 0; i < lesson.items.length; i++) {
      const text = lesson.items[i];
      const filename = `${String(i + 1).padStart(2, '0')}.mp3`;
      const outputPath = path.join(lessonDir, filename);

      // Skip if file already exists
      if (fs.existsSync(outputPath)) {
        console.log(`  ✓ ${filename} (already exists)`);
        totalGenerated++;
        continue;
      }

      try {
        await downloadAudio(text, outputPath);
        console.log(`  ✓ ${filename}: ${text.substring(0, 20)}...`);
        totalGenerated++;

        // Rate limit - wait 500ms between requests
        await sleep(500);
      } catch (error) {
        console.log(`  ✗ ${filename}: Failed - ${error.message}`);
        totalFailed++;
      }
    }
  }

  console.log(`\n========================================`);
  console.log(`Done! Generated: ${totalGenerated}, Failed: ${totalFailed}`);
  console.log(`Audio files saved to: ${audioDir}`);
}

generateAllAudio();
