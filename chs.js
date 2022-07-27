/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    ":widepeepoHappy:": ":widepeepoHappy:",
    "\"Can't Empty The Tank\"": "“无法清空水箱”",
    "\"Gotta Empty The Tank\"": "“得清空水箱”",
    "\"Shut Up B**ch\"": "\"闭嘴婊子\"",
    "\"The Perfect Concentration\"": "《完美的专注》",
    "A fun little periodic table:": "一个有趣的小元素周期表：",
    "Acamaeda,": "阿卡梅达，",
    "Ah sh*t, here we go again.": "啊sh*t，我们又来了。",
    "all forms of xp": "所有形式的 xp",
    "Avogadro's Constant": "阿伏伽德罗常数",
    "Black lung.": "黑肺。",
    "Break the current max capacity.": "打破当前最大容量。",
    "Click Deflate at 497L of Helium Gas or higher.": "单击 497L 或更高的氦气放气。",
    "Credits:": "学分：",
    "Decode with Base64 for answer: U3BhbSBjbGljayBvbiBob2xkIGJ1dHRvbiB3ZWlyZG8u": "使用 Base64 解码以获得答案：U3BhbSBjbGljayBvbiBob2xkIGJ1dHRvbiB3ZWlyZG8u",
    "Doctor Who???": "神秘博士？？？",
    "Element(s)": "项目）",
    "Escapee,": "逃犯，",
    "Expenses/day:": "费用/天：",
    "Fill the bar 3 times without the multiplier dropping to 0.2.": "填充条形图 3 次，但乘数不会降至 0.2。",
    "Fill up the bar around 5 times with a 1.1 Hydrogen Multiplier. Now go to the gym.": "使用 1.1 氢倍增器将条形填充大约 5 次。现在去健身房。",
    "Gassed Up": "气喘吁吁",
    "Get 6.022e23. Nothing else is important. Nope.": "得到 6.022e23。其他什么都不重要。没有。",
    "Get Achievement 4": "获得成就 4",
    "Get full automation of Hydrogen layer.": "实现氢气层的全自动化。",
    "Get the second element.": "获得第二项。",
    "Health multiplies": "健康倍增",
    "Health:": "健康：",
    "Here you will advance from element to element until I decide to stop. That's about it, not much else to say...There's save files under this if you want to skip a section or your savefile gets corrupted.": "在这里，您将逐个元素前进，直到我决定停止。就是这样，没什么好说的……如果你想跳过一个部分或者你的保存文件被损坏，下面有保存文件。",
    "High-Pitched Frequency": "高音频率",
    "Hold over 1k Hydrogen Gas.": "保持超过 1k 氢气。",
    "Hydrogen": "氢",
    "Hydrogen Automaton": "氢自动机",
    "Hydrogen Gas": "氢气",
    "Hydrogen increases Hydrogen Power gain by 0": "氢气使氢气能量增益增加 0",
    "Hydrogen Tank": "氢气罐",
    "If you can't get it normally anymore or don't understand how to get it.": "如果您无法正常获取或不知道如何获取。",
    "Income/day:": "收入/天：",
    "incremental_gamer,": "增量玩家，",
    "It's Always Been One Step Forward And Two Steps Back.": "它总是前进一步，后退两步。",
    "Jakub,": "雅库布，",
    "JJP.": "J.P。",
    "Maybe you'll fix your past mistakes.": "也许你会改正你过去的错误。",
    "Mining waste into the ocean.": "将废物开采到海洋中。",
    "Money talks.": "有钱能使鬼推磨。",
    "NEET": "尼特",
    "Net/day:": "净/天：",
    "No Hydrogen?": "没有氢气？",
    "NOOOOOOOOOOOOOOOOOOOOO WAAAAAAAAY!?!@@#@#": "NOOOOOOOOOOOOOOOOO WAAAAAAAAY!?!@@#@#",
    "Per": "Per",
    "Produce 10k Total Hydrogen Gas.": "生产 10k 总氢气。",
    "Produce Hydrogen Gas on hover.": "悬停时产生氢气。",
    "Req: 0 / 1.00 Hydrogen Power": "要求：0 / 1.00 氢能",
    "Restpritory damage.": "残损。",
    "Save files:": "保存文件：",
    "Savefiles": "保存文件",
    "SCROLL_WHEEL": "滚轮",
    "smiley,": "笑脸，",
    "Son of a GLITCH": "故障之子",
    "Spend over 201 ticks with extra text on.": "花费超过 201 个刻度和额外的文本。",
    "Suffer": "痛苦",
    "Surf surf, surf surf crazy.": "冲浪冲浪，冲浪冲浪疯狂。",
    "Tedious work eh?.": "乏味的工作是吗？",
    "Thacker Pass lithium mine.": "Thacker Pass 锂矿。",
    "This is a periodic table tree and it all starts with hydrogen because of its- well, I guess it's atomic properties or something. Anyway, start producing some hydrogen gas so we can convert it into energy or something.": "这是一个元素周期表树，它都是从氢开始的，因为它——嗯，我猜它是原子属性什么的。无论如何，开始生产一些氢气，这样我们就可以将其转化为能量或其他东西。",
    "Unlock the third element.": "解锁第三个元素。",
    "v1.6.5": "v1.6.5",
    "Welcome To The Periodic Table Tree": "欢迎来到元素周期表树",
    "widepeepoHappy": "widepeepo快乐",
    "Your First Element!": "你的第一个元素！",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) achievements$/, '您有 $1 项成就'],
    [/^You have (.+) Hydrogen Power$/, '你有 $1 氢能'],
    [/^You have (.+) Hydrogen Gas$/, '您有 $1 氢气'],
    [/^You are making 0.90L Hydrogen Gas per tick$/, '您每 tick 生产 $1 氢气'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) Achievements$/, '$1 成就'],
    [/^([\d\.,]+) Hydrogen$/, '$1 氢'],
    [/^([\d\.,]+) Hydrogen and ([\d\.,]+) Hydrogen Power$/, '$1 氢 和 $2 氢能'],
    [/^([\d\.,]+)x Hydogen Gas.$/, '$1 氢气。'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);