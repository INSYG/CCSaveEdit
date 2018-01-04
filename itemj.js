var itemj = {
	"items": [
		{
			"name": {
				"en_US": "Golden Triangle",
				"de_DE": "Goldenes Dreieck",
				"langUid": 1,
				"zh_CN": "金三角",
				"ko_KR": "황금 삼각형",
				"ja_JP": "ゴールドトライアングル"
			},
			"description": {
				"en_US": "A yellow triangle. Seems to be rather useless.",
				"de_DE": "Ein gelbes Dreieck. Wirkt ziemlich nutzlos.",
				"fr_FR": "undefined",
				"langUid": 378,
				"zh_CN": "一个黄色的三角形。看起来毫无用处。",
				"ko_KR": "노란색 삼각형. 딱히 쓸 데는 없어 보입니다.",
				"ja_JP": "黄色の三角形。あまり使い道はなさそうだ。"
			},
			"type": "TRADE",
			"icon": "item-trade",
			"order": 10150,
			"level": 1,
			"effect": {
				"sheet": "",
				"name": null
			},
			"rarity": 3,
			"cost": 0
		},
		{
			"name": {
				"en_US": "Sandwich",
				"de_DE": "Sandwich",
				"fr_FR": "undefined",
				"zh_CN": "三明治",
				"ja_JP": "サンドイッチ",
				"ko_KR": "샌드위치",
				"langUid": 3
			},
			"description": {
				"en_US": "A simple lunch for travels. \\c[2]Heals 15% of max HP\\c[0].",
				"de_DE": "Eine simple Mahlzeit für unterwegs. Heilt 15% der max HP.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "旅行的简餐。\\c[2]恢复最大血量的15%\\c[0]。<<A<<[CHANGED 2017/07/07]",
				"ja_JP": "旅行向けの簡単な昼食。\\c[2]最大HPの15%を回復\\c[0]。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "여행자들의 간단한 점심입니다. \\c[2]최대 HP의 15%를 회복합니다\\c[0].<<A<<[CHANGED 2017/07/21]",
				"langUid": 4
			},
			"type": "CONS",
			"cost": 100,
			"level": 1,
			"icon": "item-items",
			"time": 0,
			"stats": [
				"HEAL-1"
			],
			"rarity": 0,
			"effect": {
				"sheet": "drops",
				"name": "healing"
			},
			"useSpeed": 1,
			"order": 1,
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Green Leaf Tea",
				"de_DE": "Green Leaf Tea",
				"fr_FR": "undefined",
				"zh_CN": "绿茶叶",
				"ja_JP": "グリーンリーフ・ティー",
				"ko_KR": "그린 리프 티",
				"langUid": 5
			},
			"description": {
				"en_US": "A tad bitter but incredibly heartwarming nonetheless.",
				"de_DE": "Etwas bitter, aber dennoch unglaublich wärmend.",
				"fr_FR": "undefined",
				"zh_CN": "微有苦涩，但暖人心房。",
				"ja_JP": "少し苦いが、とても心温まる紅茶であることには変わりない。",
				"ko_KR": "조금 쓰지만, 상당히 몸을 따뜻하게 해줍니다.",
				"langUid": 897
			},
			"type": "CONS",
			"cost": 250,
			"level": 1,
			"icon": "item-items",
			"time": 30,
			"stats": [
				"REGEN-1"
			],
			"rarity": 1,
			"useSpeed": 1,
			"order": 7,
			"effect": {
				"sheet": "drops",
				"name": "healing"
			},
			"noTrack": false,
			"foodSprite": "GREEN_TEA"
		},
		{
			"name": {
				"en_US": "Sweet Berry Tea",
				"de_DE": "Sweet Berry Tea",
				"fr_FR": "undefined",
				"zh_CN": "甜浆果茶",
				"ja_JP": "スイートベリー・ティー",
				"ko_KR": "스위트 베리 티",
				"langUid": 7
			},
			"description": {
				"en_US": "Sweet and fruity tea. Keeps you warm for a long time.",
				"de_DE": "Süßer und fruchtiger Tee. Wird dich sehr lange warm halten.",
				"fr_FR": "undefined",
				"zh_CN": "甜美的果味茶。可以使你暖和一段时间。",
				"ja_JP": "甘くフルーティーな紅茶。長時間体をポカポカさせてくれる。",
				"ko_KR": "과일이 들어있는 달콤한 차입니다. 마시면 한동안 몸이 따스해집니다.",
				"langUid": 898
			},
			"type": "CONS",
			"cost": 1050,
			"level": 1,
			"icon": "item-items",
			"time": 35,
			"stats": [
				"REGEN-2"
			],
			"rarity": 1,
			"useSpeed": 1,
			"order": 8,
			"effect": {
				"sheet": "drops",
				"name": "healing"
			},
			"noTrack": false,
			"foodSprite": "GREEN_TEA"
		},
		{
			"name": {
				"en_US": "-Thunfischbrötchen",
				"de_DE": "Thunfischbrötchen",
				"langUid": 9,
				"zh_CN": "-吞拿鱼面包",
				"ko_KR": "-참치 샌드위치",
				"ja_JP": "-ツナロールパン"
			},
			"description": {
				"en_US": "Will f§=k you up.",
				"de_DE": "yepp.",
				"fr_FR": "undefined",
				"zh_CN": "有胆子你就吃。",
				"langUid": 1222,
				"ko_KR": "X나게 힘이 날 겁니다.",
				"ja_JP": "あなたをメちゃKU茶にする。"
			},
			"type": "EQUIP",
			"cost": 1000,
			"level": 1,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1.5,
					1.1,
					1.3,
					1.9
				],
				"hp": 59,
				"attack": 12,
				"defense": 27,
				"focus": 33
			},
			"properties": {
				"XP_PLUS": 1.1,
				"AIM_SPEED": 1.4
			},
			"rarity": 0,
			"order": 61,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"name": {
				"en_US": "-Thunfischsalat",
				"de_DE": "Thunfischsalat",
				"langUid": 11,
				"zh_CN": "-吞拿鱼沙拉",
				"ko_KR": "-참치 샐러드",
				"ja_JP": "-ツナサラダ"
			},
			"description": {
				"en_US": "Can contain traces of nuts.",
				"de_DE": "Kann Spuren von Nüssen enthalten..",
				"fr_FR": "undefined",
				"zh_CN": "带有一丝干果味道。",
				"langUid": 1223,
				"ko_KR": "견과류가 약간 첨가되어 있습니다.",
				"ja_JP": "ナッツを少量含んでいる。"
			},
			"type": "EQUIP",
			"cost": 1000,
			"level": 1,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1.5,
					1.1,
					1.3,
					1.9
				],
				"hp": 2060,
				"attack": 12,
				"defense": 27,
				"focus": 33
			},
			"properties": {
				"XP_PLUS": 1.1,
				"AIM_SPEED": 1.4
			},
			"rarity": 0,
			"order": 62,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"name": {
				"en_US": "Masterball",
				"de_DE": "Meisterball",
				"langUid": 13,
				"zh_CN": "大师球",
				"ko_KR": "마스터볼",
				"ja_JP": "マスターボール"
			},
			"description": {
				"en_US": "Heroes once used this device to capture legendary fiends.",
				"de_DE": "Helden verwendeten dieses Gerät einst, um legendäre Freunde zu fangen.",
				"fr_FR": "undefined",
				"langUid": 373,
				"zh_CN": "英雄们曾用这个设备来抓捕传说中的恶魔。",
				"ko_KR": "한때 영웅들은 전설의 악령을 잡는 데 이 장치를 쓰곤 했습니다.",
				"ja_JP": "伝説級の敵を捕まえるために英雄たちが使ったと言われる機器。"
			},
			"type": "TRADE",
			"icon": "item-trade",
			"rarity": 3,
			"order": 10152,
			"effect": {
				"sheet": "",
				"name": null
			},
			"cost": 0
		},
		{
			"name": {
				"en_US": "Blue Shell",
				"de_DE": "Blaue Schale",
				"langUid": 15,
				"zh_CN": "蓝色贝壳",
				"ko_KR": "파란 껍질",
				"ja_JP": "青いコウラ"
			},
			"description": {
				"en_US": "Is fabled to be the bane of many a conqueror.",
				"de_DE": "Hat schon so manchen Eroberer ins Unglück gestürzt.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "传说这是许多征服者的毒药。",
				"ja_JP": "征服者の死の原因として名高い。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1371,
				"ko_KR": "정복자를 죽음에 이르게 한 아이템이라는 소문이 있습니다."
			},
			"type": "TRADE",
			"rarity": 3,
			"cost": 0,
			"level": 1,
			"icon": "item-trade",
			"order": 10148,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Brostick of Force",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "兄弟大棒",
				"ja_JP": "力のこん棒<<A<<[CHANGED 2017/08/03]",
				"langUid": 1660,
				"ko_KR": "힘의 브로스틱"
			},
			"description": {
				"en_US": "An extremely rare weapon created by a paramilitary organization of unknown origin.",
				"de_DE": "Eine extrem seltene Waffe einer paramilitärischen Organization unbekannter Herkunft.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "极其稀有的武器，由一个迷之军事组织制造。",
				"ja_JP": "正体不明の自警武装集団によって作られた、非常に珍しい武器。<<A<<[CHANGED 2017/08/03]",
				"langUid": 2,
				"ko_KR": "출처를 알 수 없는 준군사 조직에서 만든 매우 희귀한 무기입니다."
			},
			"type": "EQUIP",
			"cost": 5555,
			"level": 20,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 52,
				"attack": 17,
				"defense": 9
			},
			"properties": {
				"ASSAULT": 1.1,
				"STUN_THRESHOLD": 1.02
			},
			"rarity": 2,
			"order": 14,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "-Pig Mask NOEZ",
				"de_DE": "",
				"langUid": 19,
				"zh_CN": "-猪面具NOEZ",
				"ko_KR": "-돼지 가면 NOEZ<<C<<What does NOEZ stands for?<<A<<NOEZ is actually german... gonna ask that what the team is intending here"
			},
			"description": {
				"en_US": "Once owned by a mysterious hero from a forgotten sunny land at the sea.",
				"de_DE": "War einst in Besitz eines mysteriösen Helden aus einer sonnigen Küstenstadt.",
				"fr_FR": "undefined",
				"zh_CN": "曾一位从被遗忘的滨海阳光之地来的英雄所有。",
				"langUid": 1224,
				"ko_KR": "바닷가의 햇빛이 찬란한 버려진 땅에 사는 수수께끼의 영웅이 소유했던 것입니다.",
				"ja_JP": "忘れ去られた島の謎の英雄が所有していたもの。"
			},
			"type": "EQUIP",
			"cost": 1000,
			"level": 1,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 20,
				"attack": 3,
				"defense": 5,
				"focus": 4
			},
			"properties": {},
			"rarity": 2,
			"order": 39,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"name": {
				"en_US": "-Grind Board NOEZ",
				"de_DE": "",
				"langUid": 21,
				"zh_CN": "-磨板NOEZ",
				"ko_KR": "-그라인드 보드 NOEZ"
			},
			"description": {
				"en_US": "Once used by the careless youth to perform an \"Olli\".",
				"de_DE": "",
				"fr_FR": "undefined",
				"zh_CN": "曾经被一位莽撞的年轻人用来玩奥利游戏。",
				"langUid": 1225,
				"ko_KR": "청소년들이 험하게 사용했던 스케이트보드입니다.<<C<<What is the meaning of performing an Olli?<<A<<Skateboard Move",
				"ja_JP": "軽率な若者がスケートボードとして使ったことがある。"
			},
			"type": "EQUIP",
			"cost": 1000,
			"level": 1,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"focus": 10
			},
			"properties": {},
			"rarity": 0,
			"order": 34,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"name": {
				"en_US": "Timeworn Belt",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "老旧腰带",
				"ja_JP": "ボロボロのベルト<<A<<[CHANGED 2017/08/03]",
				"langUid": 1781,
				"ko_KR": "낡은 벨트"
			},
			"description": {
				"en_US": "An adorned belt that must have been the latest fashion at some point in Ancient times.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一件造型奇异的腰带，想必是先祖时期的时髦货。",
				"ja_JP": "古代人の間で一世を風びしたに違いない、飾り付きのベルト。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1782,
				"ko_KR": "고대 시대 최신 유행이었을 것으로 추정되는 장식된 벨트입니다."
			},
			"type": "EQUIP",
			"cost": 2,
			"level": 49,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1.1,
					1.1,
					1.1,
					1.1
				],
				"hp": 666,
				"defense": 30,
				"focus": 24
			},
			"properties": {
				"GUARD_SP": 1.1,
				"OVERHEAT_REDUCTION": 1.2
			},
			"rarity": 3,
			"order": 24,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "-Rauser NOEZ",
				"de_DE": "",
				"langUid": 25,
				"zh_CN": "-劳斯NOEZ",
				"ko_KR": "-라우저 NOEZ"
			},
			"description": {
				"en_US": "A cross-shaped weapon to fight enemies in the sky.",
				"de_DE": "",
				"fr_FR": "undefined",
				"zh_CN": "一把与空中敌人战斗的十字形武器。",
				"langUid": 1227,
				"ko_KR": "공중에서 적과 싸울 수 있는 십자가 모양의 무기입니다.",
				"ja_JP": "空中の敵と戦うための十字型の武器。"
			},
			"type": "EQUIP",
			"cost": 1000,
			"level": 1,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 12,
				"focus": 2
			},
			"properties": {
				"MELEE_DMG": 0.75,
				"CHARGED_BALL_DMG": 1.25
			},
			"rarity": 2,
			"order": 58,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"name": {
				"en_US": "Humming Razor",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "震荡刀<<A<<[CHANGED 2017/07/01]",
				"ja_JP": "ハミングレイザー<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "진동 면도칼",
				"langUid": 27
			},
			"description": {
				"en_US": "A sharp tool that constantly vibrates weakly, emitting a soft sound.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "不断震动的一把利刃，发出柔和的嗡鸣。<<A<<[CHANGED 2017/07/01]",
				"ja_JP": "常に振動してかすかな音を立てている、鋭い武器。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "작은 소리를 내며 약한 진동이 지속되는 날카로운 도구입니다.",
				"langUid": 1228
			},
			"type": "EQUIP",
			"cost": 2,
			"level": 36,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 52,
				"defense": 11,
				"focus": 11
			},
			"properties": {
				"ASSAULT": 1.2,
				"GUARD_STRENGTH": 0.75,
				"AIM_STABILITY": 0.9
			},
			"rarity": 3,
			"order": 25,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"name": {
				"en_US": "-Monster Shell NOEZ",
				"de_DE": "",
				"langUid": 29,
				"zh_CN": "-怪兽贝壳NOEZ",
				"ko_KR": "-괴물 껍질 NOEZ"
			},
			"description": {
				"en_US": "Always sometimes protects you from Monsters.",
				"de_DE": "",
				"fr_FR": "undefined",
				"zh_CN": "总能时不时的保护你不被怪物吃掉。",
				"langUid": 1229,
				"ko_KR": "괴물로부터 자신을 보호할 수 있습니다.",
				"ja_JP": "常に時々モンスターから守ってくれる。"
			},
			"type": "EQUIP",
			"cost": 1000,
			"level": 1,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 15,
				"defense": 10
			},
			"properties": {},
			"rarity": 0,
			"order": 38,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"name": {
				"en_US": "Scarecrown",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "骇人的皇冠",
				"ja_JP": "スケアクラウン<<A<<[CHANGED 2017/08/03]",
				"langUid": 1755,
				"ko_KR": "허수왕관"
			},
			"description": {
				"en_US": "The floppy hat of the Boosi Man. Not really a crown, but don't let that haunt you.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "大·老板的软帽子。并非皇冠，但也不要被它吓到了。",
				"ja_JP": "ブージーマンのぐにゃぐにゃの帽子。王冠というわけではないが、とりつかれないようにしよう。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1756,
				"ko_KR": "부지맨의 납작한 모자입니다. 실제 왕관은 아니지만, 계속해서 쓰고 있진 마세요."
			},
			"type": "EQUIP",
			"cost": 0,
			"level": 44,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					0.9,
					0.9,
					0.9,
					0.9
				],
				"hp": 77,
				"attack": 10,
				"defense": 7,
				"focus": 77
			},
			"properties": {
				"MONEY_PLUS": 1.1,
				"DASH_INVINC": 1.25
			},
			"rarity": 4,
			"order": 37,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Holiday Boots",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "假日靴子",
				"ja_JP": "ホリデーブーツ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1707,
				"ko_KR": "할리데이 부츠"
			},
			"description": {
				"en_US": "Take out the presents before putting in feet!",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "穿上之前先把里面的礼物拿出来！",
				"ja_JP": "はく前にプレゼントを取り出そう！<<A<<[CHANGED 2017/08/03]",
				"langUid": 1708,
				"ko_KR": "신발을 신기 전에 안에 들어있는 선물을 꺼내세요!"
			},
			"type": "EQUIP",
			"cost": 0,
			"level": 48,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 500,
				"defense": 27,
				"focus": 37
			},
			"properties": {
				"ITEM_BOOST": 1.1,
				"MONEY_PLUS": 1.1
			},
			"rarity": 0,
			"order": 32,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"name": {
				"en_US": "-Sirian Key NOEZ",
				"de_DE": "",
				"langUid": 35,
				"zh_CN": "-天狼星鞭NOEZ",
				"ko_KR": "-시리우스의 열쇠 NOEZ"
			},
			"description": {
				"en_US": "Uses a strange whip like laser to slowly damage enemies.",
				"de_DE": "",
				"fr_FR": "undefined",
				"zh_CN": "使用一道奇怪的光鞭来缓慢伤害敌人。",
				"langUid": 1230,
				"ko_KR": "레이저같은 특이한 채찍으로 적에게 천천히 대미지를 가합니다.",
				"ja_JP": "レーザーのような奇妙なムチを使い、敵にゆっくりとダメージを与える。"
			},
			"type": "EQUIP",
			"cost": 1000,
			"level": 1,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 12,
				"focus": 10
			},
			"properties": {},
			"rarity": 0,
			"order": 56,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"name": {
				"en_US": "Dungeon Heart",
				"de_DE": "Dungeon Herz",
				"langUid": 37,
				"zh_CN": "地牢之心",
				"ko_KR": "던전의 심장",
				"ja_JP": "洞窟の心臓"
			},
			"description": {
				"en_US": "A strange artifact used to banish monsters in caves.",
				"de_DE": "Dieses seltsame Artefakt verbannte einst Monster in Höhlen.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一个奇怪的神器，可以用来清除洞穴的怪物。",
				"ja_JP": "洞窟内の敵を消すのに使う奇妙なアーティファクト。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1372,
				"ko_KR": "동굴 안의 괴물을 추방하는 특이한 가공품입니다."
			},
			"type": "TRADE",
			"rarity": 3,
			"cost": 0,
			"level": 1,
			"icon": "item-trade",
			"order": 10149,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "-Testhat",
				"de_DE": "Testhat",
				"langUid": 39,
				"zh_CN": "-试验帽",
				"ko_KR": "-시험모자",
				"ja_JP": "-テストハット"
			},
			"description": {
				"en_US": "A fashionable hat for testing. STARTER-STANDIN!",
				"de_DE": "",
				"fr_FR": "undefined",
				"zh_CN": "一顶用于测试的时髦头饰。新手必备！",
				"langUid": 1231,
				"ko_KR": "테스트용 유행 모자입니다.",
				"ja_JP": "テスト用のオシャレな帽子。初期装備の代役！"
			},
			"type": "EQUIP",
			"cost": 1000,
			"level": 1,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"defense": 1,
				"focus": 3
			},
			"properties": {},
			"rarity": 0,
			"order": 38,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"name": {
				"en_US": "-Testarms",
				"de_DE": "Testarms",
				"langUid": 41,
				"zh_CN": "-试验武器",
				"ko_KR": "-시험무기",
				"ja_JP": "-テストアーム"
			},
			"description": {
				"en_US": "A sometimes deadly weapon for testing. STARTER-STANDIN!",
				"de_DE": "",
				"fr_FR": "undefined",
				"zh_CN": "在测试中可算是致命利器了。新手必备！",
				"langUid": 1232,
				"ko_KR": "가끔 치명적일 수 있는 테스트용 무기입니다.",
				"ja_JP": "テスト用の少し殺傷力の高い武器。初期装備の代役！"
			},
			"type": "EQUIP",
			"cost": 1000,
			"level": 1,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 2,
				"defense": 1
			},
			"properties": {
				"GUARD_SP": 1.25
			},
			"rarity": 0,
			"order": 59,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"name": {
				"en_US": "-Testbelt",
				"de_DE": "Testbelt",
				"langUid": 43,
				"zh_CN": "-试验腰带",
				"ko_KR": "-시험벨트",
				"ja_JP": "-テストベルト"
			},
			"description": {
				"en_US": "A trousers-holding belt for testing. STARTER-STANDIN!",
				"de_DE": "",
				"fr_FR": "undefined",
				"zh_CN": "一件用于测试的连裤腰带。新手必备！",
				"langUid": 1233,
				"ko_KR": "바지를 고정해주는 테스트용 벨트입니다.",
				"ja_JP": "テスト用のサスペンダー付きベルト。初期装備の代役！"
			},
			"type": "EQUIP",
			"cost": 1000,
			"level": 1,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 20,
				"defense": 1
			},
			"properties": {},
			"rarity": 0,
			"order": 37,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"name": {
				"en_US": "-Testboots",
				"de_DE": "Testboots",
				"langUid": 45,
				"zh_CN": "-试验靴子",
				"ko_KR": "-시험부츠",
				"ja_JP": "-テストブーツ"
			},
			"description": {
				"en_US": "Some comfortable boots for testing. STARTER-STANDIN!",
				"de_DE": "",
				"fr_FR": "undefined",
				"zh_CN": "用于测试的舒适靴子。新手必备！",
				"langUid": 1234,
				"ko_KR": "테스트용 편안한 부츠입니다.",
				"ja_JP": "テスト用のはき心地のいいブーツ。初期装備の代役！"
			},
			"type": "EQUIP",
			"cost": 1000,
			"level": 1,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 10,
				"defense": 1,
				"focus": 1
			},
			"properties": {},
			"rarity": 0,
			"order": 33,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"name": {
				"en_US": "Rookiehat",
				"de_DE": "Rookiehat<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "新手帽",
				"ja_JP": "ルーキーハット<<A<<[CHANGED 2017/08/03]",
				"langUid": 1425,
				"ko_KR": "초보자 모자"
			},
			"description": {
				"en_US": "Starting Equipment. Let the Adventure begin!",
				"de_DE": "Grundausrüstung. Möge das Abenteuer beginnen!<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "初始装备。开始冒险吧！",
				"ja_JP": "初期装備。さあ、冒険を始めよう！<<A<<[CHANGED 2017/08/03]",
				"langUid": 1435,
				"ko_KR": "스타팅 장비입니다. 모험을 시작하세요!"
			},
			"type": "EQUIP",
			"cost": 4,
			"level": 1,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"focus": 3
			},
			"properties": {},
			"rarity": 0,
			"order": 1,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Rookieblade",
				"de_DE": "Anfängerklinge",
				"langUid": 49,
				"zh_CN": "新手剑",
				"ko_KR": "초보자 블레이드",
				"ja_JP": "ルーキーブレード"
			},
			"description": {
				"en_US": "Starting Equipment. Let the Adventure begin!",
				"de_DE": "Grundausrüstung. Möge das Abenteuer beginnen!",
				"fr_FR": "undefined",
				"langUid": 890,
				"zh_CN": "初始装备。开始冒险吧！",
				"ko_KR": "스타팅 장비입니다. 모험을 시작하세요!",
				"ja_JP": "初期装備。さあ、冒険を始めよう！"
			},
			"type": "EQUIP",
			"cost": 4,
			"level": 1,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 2,
				"defense": 1
			},
			"properties": {},
			"rarity": 0,
			"order": 1,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"name": {
				"en_US": "Rookieboots",
				"de_DE": "Anfängerstiefel",
				"langUid": 51,
				"zh_CN": "新手靴",
				"ko_KR": "초보자 부츠",
				"ja_JP": "ルーキーブーツ"
			},
			"description": {
				"en_US": "Starting Equipment. Let the Adventure begin!",
				"de_DE": "Grundausrüstung. Möge das Abenteuer beginnen!",
				"fr_FR": "undefined",
				"langUid": 891,
				"zh_CN": "初始装备。开始冒险吧！",
				"ko_KR": "스타팅 장비입니다. 모험을 시작하세요!",
				"ja_JP": "初期装備。さあ、冒険を始めよう！"
			},
			"type": "EQUIP",
			"cost": 4,
			"level": 1,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 10,
				"defense": 1,
				"focus": 1
			},
			"properties": {},
			"rarity": 0,
			"order": 1,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"name": {
				"en_US": "Rookiebelt",
				"de_DE": "Anfängergürtel",
				"langUid": 53,
				"zh_CN": "新手腰带",
				"ko_KR": "초보자 벨트",
				"ja_JP": "ルーキーベルト"
			},
			"description": {
				"en_US": "Starting Equipment. Let the Adventure begin!",
				"de_DE": "Grundausrüstung. Möge das Abenteuer beginnen!",
				"fr_FR": "undefined",
				"langUid": 892,
				"zh_CN": "初始装备。开始冒险吧！",
				"ko_KR": "스타팅 장비입니다. 모험을 시작하세요!",
				"ja_JP": "初期装備。さあ、冒険を始めよう！"
			},
			"type": "EQUIP",
			"cost": 4,
			"level": 1,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 20,
				"defense": 1
			},
			"properties": {},
			"rarity": 0,
			"order": 1,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"name": {
				"en_US": "Hi-Sandwich",
				"de_DE": "Hi-Sandwich",
				"fr_FR": "undefined",
				"zh_CN": "高级三明治",
				"ja_JP": "ハイ・サンドイッチ",
				"ko_KR": "하이 샌드위치",
				"langUid": 55
			},
			"description": {
				"en_US": "A larger Sandwich, to properly greet the hunger. \\c[2]Heals 25% of max HP\\c[0].",
				"de_DE": "Eine etwas größere Variante des gemeinen Sandwiches. Heilt 25% der max HP.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一个大型三明治，用以慰藉饥饿者。\\c[2]恢复最大血量的25%\\c[0]。<<A<<[CHANGED 2017/07/07]",
				"ja_JP": "食欲をがっつり満たす、大きなサンドイッチ。\\c[2]最大HPの25%を回復\\c[0]。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "더 큰 샌드위치로, 제대로 배를 채울 수 있습니다. \\c[2]최대 HP의 25%를 회복합니다\\c[0].<<A<<[CHANGED 2017/07/21]",
				"langUid": 687
			},
			"type": "CONS",
			"cost": 300,
			"level": 1,
			"icon": "item-items",
			"time": 0,
			"stats": [
				"HEAL-2"
			],
			"rarity": 0,
			"effect": {
				"sheet": "drops",
				"name": "healing"
			},
			"useSpeed": 1,
			"order": 2,
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Chef Sandwich",
				"de_DE": "Chef Sandwich",
				"fr_FR": "undefined",
				"zh_CN": "主厨三明治",
				"ja_JP": "シェフ・サンドイッチ",
				"ko_KR": "쉐프 추천 샌드위치",
				"langUid": 57
			},
			"description": {
				"en_US": "A delicious meal for fine adventurers. \\c[1]Slow\\c[0], but \\c[2]heals 50% of max HP\\c[0].",
				"de_DE": "Eine schmackhafte Mahlzeit für Abenteurer. Langsam, aber heilt 50% der max HP.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一份为冒险者准备的美味佳肴。慢慢吃，\\c[2]恢复最大血量的50%\\c[0]。<<A<<[CHANGED 2017/07/07]",
				"ja_JP": "熟練の冒険者が好むおいしい食事。\\c[1]時間がかかる\\c[0]が、\\c[2]最大HPの50%を回復\\c[0]。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "훌륭한 모험가들의 맛있는 식사입니다. \\c[1]느리지만\\c[0], \\c[2]최대 HP의 50%를 회복합니다\\c[0].<<A<<[CHANGED 2017/07/21]",
				"langUid": 688
			},
			"type": "CONS",
			"cost": 950,
			"level": 1,
			"icon": "item-items",
			"time": 0,
			"stats": [
				"HEAL-3"
			],
			"rarity": 0,
			"effect": {
				"sheet": "drops",
				"name": "healing"
			},
			"useSpeed": 2,
			"order": 3,
			"noTrack": false,
			"foodSprite": "SANDWICH"
		},
		{
			"name": {
				"en_US": "Bronze Edge",
				"de_DE": "Bronze Edge<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "青铜剑",
				"ja_JP": "ブロンズエッジ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1498,
				"ko_KR": "청동 검"
			},
			"description": {
				"en_US": "All-purpose weapon made from a simple alloy of copper and tin. Just like old times.",
				"de_DE": "Allzweckwaffe, geschmiedet aus einer einfachen Kupfer-Zinn-Legierung. Ein Klassiker.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "由铜和锡的简单合金制成的多用途武器。像古时候的东西。",
				"ja_JP": "銅と錫のシンプルな合金でできた汎用武器。まさに古き時代のようだ。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1499,
				"ko_KR": "구리와 주석이 섞인 다방면 무기입니다. 옛날처럼요."
			},
			"type": "EQUIP",
			"cost": 800,
			"level": 9,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 7,
				"defense": 4
			},
			"properties": {},
			"rarity": 1,
			"order": 6,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Bronze Mail",
				"de_DE": "Bronze Brustpanzer<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "青铜盔甲",
				"ja_JP": "ブロンズメイル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1506,
				"ko_KR": "청동 갑옷"
			},
			"description": {
				"en_US": "Mass-produced, pretty sturdy and shining in the sun. A soldier's cheap bread and butter.",
				"de_DE": "Glänzende und stabile Massenware. Die Alltagskleidung des sparsamen Soldaten.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "大量生产，相当坚固，在阳光下闪闪发亮。士兵的基础必备品。",
				"ja_JP": "大量生産された、とても頑丈でピカピカに輝くよろい。お手頃価格な、軍人にとっては必要不可欠な物。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1507,
				"ko_KR": "꽤 튼튼하고 빛나는 대량 생산된 갑옷입니다. 군인의 싸구려 빵과 버터 같군요."
			},
			"type": "EQUIP",
			"cost": 900,
			"level": 9,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 85,
				"defense": 3
			},
			"properties": {},
			"rarity": 1,
			"order": 3,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Bronze Goggles",
				"de_DE": "Bronze Goggles<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "青铜护目镜",
				"ja_JP": "ブロンズゴーグル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1413,
				"ko_KR": "청동 고글"
			},
			"description": {
				"en_US": "Goggles with frames of bronze and glasses of... glass. ",
				"de_DE": "Eine Schutzbrille mit bronzenem Gestell und gläsernen... Gläsern.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "框架由青铜构成，镜片是玻璃的。",
				"ja_JP": "フレーム部が銅でできているゴーグル。ガラス部は…ガラスでできている。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1424,
				"ko_KR": "청동 테두리와 유리로 구성된 고글입니다."
			},
			"type": "EQUIP",
			"cost": 850,
			"level": 9,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"defense": 1,
				"focus": 10
			},
			"properties": {},
			"rarity": 1,
			"order": 3,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Bronze Boots",
				"de_DE": "Bronze Boots<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "青铜靴",
				"ja_JP": "ブロンズブーツ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1508,
				"ko_KR": "청동 부츠"
			},
			"description": {
				"en_US": "Durable footwear made from durable material. Nothing special but keeps thorns out.",
				"de_DE": "Stabiles Schuhwerk aus stabilem Material. Nichts besonderes, aber schützt vor Dornen.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "耐用鞋由耐用材料制成。除了防刺之外没什么特别之处。",
				"ja_JP": "耐久性の高い素材でできた耐久力の高いブーツ。まあ、足をとげから守ることくらいはできる。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1509,
				"ko_KR": "튼튼한 재료로 만들어진 튼튼한 신발입니다. 딱히 특별한 건 없지만 가시에 찔리진 않겠군요."
			},
			"type": "EQUIP",
			"cost": 850,
			"level": 9,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 60,
				"defense": 2,
				"focus": 4
			},
			"properties": {},
			"rarity": 1,
			"order": 3,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Grasswalkers",
				"de_DE": "Grasswalkers<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "草地靴",
				"ja_JP": "グラスウォーカー<<A<<[CHANGED 2017/08/03]",
				"langUid": 1426,
				"ko_KR": "그래스워커"
			},
			"description": {
				"en_US": "Comfortable boots for comfortable terrain.",
				"de_DE": "Komfortable Schuhe für komfortables Terrain.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "适用于舒坦地形的舒适靴子。",
				"ja_JP": "歩きやすい地形のための歩きやすいブーツ。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1427,
				"ko_KR": "푹신한 땅에서 신을 편안한 신발입니다."
			},
			"type": "EQUIP",
			"cost": 100,
			"level": 5,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 35,
				"defense": 1,
				"focus": 3
			},
			"properties": {},
			"rarity": 0,
			"order": 2,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Explorer's Cap",
				"de_DE": "Explorer's Cap<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "探险家的帽子",
				"ja_JP": "冒険者の帽子<<A<<[CHANGED 2017/08/03]",
				"langUid": 1428,
				"ko_KR": "탐험가의 모자"
			},
			"description": {
				"en_US": "Typical headgear for beginners. May keep out the rain, at least.",
				"de_DE": "Typische Kopfbedeckung für Anfänger. Schützt immerhin vor Regen.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "为初学者准备的典型头饰。至少也许能防雨。",
				"ja_JP": "初心者向きの頭部装備。少なくとも、雨くらいはしのげる。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1429,
				"ko_KR": "초보자를 위한 전형적인 모자입니다. 최소한 비는 막아주겠죠."
			},
			"type": "EQUIP",
			"cost": 100,
			"level": 5,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"defense": 1,
				"focus": 5
			},
			"properties": {},
			"rarity": 0,
			"order": 2,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Edge o' All",
				"de_DE": "Edge o' All<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "锋刃剑",
				"ja_JP": "エッジ・オー・オール<<A<<[CHANGED 2017/08/03]",
				"langUid": 1430,
				"ko_KR": "작은 검"
			},
			"description": {
				"en_US": "A weak yet practical weapon for self-defense.",
				"de_DE": "Eine schwache, aber handliche Waffe zur Selbstverteidigung.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一把脆弱但实用的自卫武器。",
				"ja_JP": "弱いが、護身には役立つ武器。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1431,
				"ko_KR": "약하지만, 자신을 보호하는 데는 실용적입니다."
			},
			"type": "EQUIP",
			"cost": 90,
			"level": 5,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 4,
				"defense": 2
			},
			"properties": {},
			"rarity": 0,
			"order": 2,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Second Hide",
				"de_DE": "Second Hide<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "防身服",
				"ja_JP": "セカンドハイド<<A<<[CHANGED 2017/08/03]",
				"langUid": 1432,
				"ko_KR": "제2의 가죽"
			},
			"description": {
				"en_US": "A simple and light protective garb for adventurers.",
				"de_DE": "Eine einfache leichte Schutzkleidung für Abenteurer.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "为冒险家准备的轻且简便的防护服。",
				"ja_JP": "シンプルだが、軽くて防御力に優れる冒険家向けの服装。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1433,
				"ko_KR": "모험가를 위한 간단하고 가벼운 보호복입니다."
			},
			"type": "EQUIP",
			"cost": 120,
			"level": 5,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 50,
				"defense": 2
			},
			"properties": {},
			"rarity": 0,
			"order": 2,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Civilian Trigger",
				"de_DE": "Civilian Trigger<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "平民枪支",
				"ja_JP": "シビリアントリガー<<A<<[CHANGED 2017/08/03]",
				"langUid": 1661,
				"ko_KR": "민간 방아쇠"
			},
			"description": {
				"en_US": "Light ranged weapon, ideal for warning shots and small skirmishes.",
				"de_DE": "Leichte Distanzwaffe, ideal für Warnschüsse und kleinere Geplänkel.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "轻型远程武器，适用于示警和小型冲突。",
				"ja_JP": "軽量の遠距離武器。威嚇射撃や小競り合いに最適。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1662,
				"ko_KR": "경고 사격과 소접전에 유용한 가벼운 원거리 무기입니다."
			},
			"type": "EQUIP",
			"cost": 1740,
			"level": 11,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 9,
				"focus": 4
			},
			"properties": {
				"RANGED_DMG": 1.2
			},
			"rarity": 2,
			"order": 7,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Winterclaw",
				"de_DE": "Winterclaw<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "冬之爪",
				"ja_JP": "ウィンタークロー<<A<<[CHANGED 2017/08/03]",
				"langUid": 1663,
				"ko_KR": "겨울의 손톱"
			},
			"description": {
				"en_US": "A stark reminder of a colder season yet to come.",
				"de_DE": "Eine mahnende Erinnerung an die nahende kalte Jahreszeit.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "提醒人们一个寒冷的季节即将到来。",
				"ja_JP": "これから来る寒い冬の季節を思い出させてくれる。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1664,
				"ko_KR": "아직 오려면 먼 추운 계절을 생각나게 합니다."
			},
			"type": "EQUIP",
			"cost": 2,
			"level": 26,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 29,
				"defense": 14
			},
			"properties": {
				"MELEE_DMG": 1.2
			},
			"rarity": 3,
			"order": 17,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Winner's Pride",
				"de_DE": "Stolz des Sieges",
				"langUid": 79,
				"zh_CN": "胜者的骄傲",
				"ko_KR": "승리자의 전리품",
				"ja_JP": "勝者の誇り"
			},
			"description": {
				"en_US": "A small bracelet to celebrate the defeat of many.",
				"de_DE": "Ein kleines Armband, welches an einen glorreichen Sieg erinnern soll.",
				"fr_FR": "undefined",
				"langUid": 489,
				"zh_CN": "一个用以庆祝击败大量敌人的小手镯。",
				"ko_KR": "많은 적을 처치했을 때를 기념하는 작은 팔찌입니다.",
				"ja_JP": "多くの者を倒した証の小さな腕輪。"
			},
			"type": "EQUIP",
			"cost": 0,
			"level": 1,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 13,
				"attack": 3,
				"defense": 7
			},
			"properties": {
				"XP_PLUS": 1.2
			},
			"rarity": 4,
			"order": 53,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"name": {
				"en_US": "Mega-Sandwich",
				"de_DE": "Mega-Sandwich",
				"fr_FR": "undefined",
				"zh_CN": "究极三明治",
				"ja_JP": "メガ・サンドイッチ",
				"ko_KR": "메가 샌드위치",
				"langUid": 81
			},
			"description": {
				"en_US": "A sandwich family pack made for long journeys. \\c[1]Slow\\c[0], but \\c[2]heals 70% of max HP\\c[0].",
				"de_DE": "Ein Familiensandwich für sehr lange Reisen. Langsam, aber heilt 70% der max HP.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一个为长途旅行准备的家庭装三明治。慢慢吃，\\c[2]恢复最大血量的70%\\c[0]。<<A<<[CHANGED 2017/07/07]",
				"ja_JP": "長旅用のファミリーサイズのサンドイッチ。\\c[1]時間がかかる\\c[0]が、\\c[2]最大HPの70%を回復\\c[0]。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "긴 여정을 위해 만든 샌드위치 패밀리 팩입니다. \\c[1]느리지만\\c[0], \\c[2]최대 HP의 70%를 회복합니다\\c[0].<<A<<[CHANGED 2017/07/21]",
				"langUid": 1134
			},
			"type": "CONS",
			"rarity": 0,
			"cost": 2100,
			"level": 1,
			"icon": "item-items",
			"time": 0,
			"stats": [
				"HEAL-4"
			],
			"effect": {
				"sheet": "drops",
				"name": "healing"
			},
			"useSpeed": 2,
			"order": 4,
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Bovine Armor",
				"de_DE": "Bovine Armor<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "牛皮甲",
				"ja_JP": "ブルアーマー<<A<<[CHANGED 2017/08/03]",
				"langUid": 1783,
				"ko_KR": "들소 갑옷"
			},
			"description": {
				"en_US": "Soft armor infused with the lifeforce of headstrong bovines.",
				"de_DE": "Weiche Rüstung, gefüllt mir der Lebenskraft von sturen Rindern.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "注入了公牛强壮的生命力的软甲。",
				"ja_JP": "向こう見ずな牛の生命力を注ぎ込んだ、柔らかい鎧。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1784,
				"ko_KR": "고집 센 들소의 생명력이 연상되는 부드러운 갑옷입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 1800,
			"level": 11,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 99,
				"attack": 3,
				"defense": 2
			},
			"properties": {
				"BERSERK": 1.15
			},
			"order": 4,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Swiftspike",
				"de_DE": "Swiftspike<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "疾刺",
				"ja_JP": "スウィフトスパイク<<A<<[CHANGED 2017/08/03]",
				"langUid": 1665,
				"ko_KR": "빠른 창"
			},
			"description": {
				"en_US": "Piercing weapon that is low in power but offers a surprisingly deadly potential.",
				"de_DE": "Eine Stichwaffe, die trotz geringer Kraft überraschend tödlich sein kann.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "穿透型武器，功率低，但杀伤潜力巨大。",
				"ja_JP": "攻撃力自体は低いものの、驚くような殺傷力を発揮することのある刺突武器。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1666,
				"ko_KR": "약한 공격력이지만 치명적일 수 있는 뾰족한 무기입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 3530,
			"level": 15,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 13,
				"focus": 7
			},
			"properties": {
				"CRITICAL_DMG": 1.5
			},
			"order": 10,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Weird Skates",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "奇怪的溜冰鞋",
				"ja_JP": "ストレンジスケート<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "특이한 스케이트",
				"langUid": 1909
			},
			"description": {
				"en_US": "Footwear with some mysterious, thus unrealized power.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "带着几分神秘的鞋子，具有未被察觉的力量。",
				"ja_JP": "不思議な力の込められた靴だが、不思議なゆえにその力は完全には引き出せない。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "알 수 없는 의문의 힘이 담긴 신발입니다.",
				"langUid": 1910
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 26,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1.1,
					1,
					1
				],
				"hp": 169,
				"defense": 6,
				"focus": 22
			},
			"properties": {
				"DASH_INVINC": 1.1
			},
			"order": 29,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Rusty Anchors",
				"de_DE": "Rusty Anchors<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "锈锚",
				"ja_JP": "ラスティアンカー<<A<<[CHANGED 2017/08/03]",
				"langUid": 1512,
				"ko_KR": "녹슨 닻"
			},
			"description": {
				"en_US": "Heavy boots with additional weight. Reinforces the stability of whoever wears them.",
				"de_DE": "Schwere Stiefel mit zusätzlichem Gewicht. Verstärkt die Standfestigkeit des Trägers.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一双重靴，可以增强穿戴者的稳定性。",
				"ja_JP": "重り付きの重い靴。履いた者の安定性を強化する。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1513,
				"ko_KR": "닻처럼 무거운 부츠입니다. 신는 사람의 안정성을 강화합니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 1730,
			"level": 11,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 65,
				"defense": 7
			},
			"properties": {
				"STUN_THRESHOLD": 1.05
			},
			"order": 4,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Fleety Sandals",
				"de_DE": "Fleety Sandals<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "敏捷凉鞋",
				"ja_JP": "フリーティサンダル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1709,
				"ko_KR": "가벼운 샌들"
			},
			"description": {
				"en_US": "Comfortable sandals which offer little protection but grant a liberating feeling.",
				"de_DE": "Bequeme Sandalen. Bieten zwar wenig Schutz, aber dafür ein Gefühl der Freiheit.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "舒适的凉鞋，提供很少的保护，但是拥有自由的感觉。",
				"ja_JP": "防御力は低いが解放感にあふれた、履き心地のよいサンダル。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1710,
				"ko_KR": "발을 약간 보호해 주면서 자유로운 느낌의 편안한 샌들입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 1670,
			"level": 11,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 42,
				"defense": 2,
				"focus": 7
			},
			"properties": {
				"AIMING_MOVEMENT": 1.25
			},
			"order": 5,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Feline Paws",
				"de_DE": "Feline Paws<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "猫爪",
				"ja_JP": "ネコノテ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1711,
				"ko_KR": "고양이의 발"
			},
			"description": {
				"en_US": "Symbolize agility, surefootedness and a weakness for moving lights.",
				"de_DE": "Symbolisieren Flinkheit, Trittsicherheit und eine Schwäche für umherschwirrende Lichter.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "标志着敏捷而稳定的步伐。弱点是移动的光点。",
				"ja_JP": "素早さと足取りの軽さ、そしてマタタビへの弱さを象徴する。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1712,
				"ko_KR": "움직이는 빛에 민첩성, 확실성, 약함을 상징합니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 4200,
			"level": 17,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 69,
				"attack": 2,
				"defense": 2,
				"focus": 9
			},
			"properties": {
				"DASH_INVINC": 1.25,
				"CRITICAL_DMG": 1.25
			},
			"order": 7,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Leaf Cape",
				"de_DE": "Leaf Cape<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "绿叶披肩",
				"ja_JP": "リーフケープ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1785,
				"ko_KR": "나뭇잎 망토"
			},
			"description": {
				"en_US": "Revitalizing garment of living material. It's gnawed on one side.",
				"de_DE": "Belebende Kleidung aus lebendem Material. Eine Seite ist angenagt.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "将新鲜的材料活性化制成。一角好像被啃过。",
				"ja_JP": "生きている物質でできた、活性化効果のある服。一辺が虫食いで穴だらけ。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1786,
				"ko_KR": "자연 재료로 만들어져 활기를 불어넣는 의류입니다. 한쪽에는 갉아먹은 흔적이 남아있습니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 3675,
			"level": 15,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					0.75,
					1,
					1,
					1
				],
				"hp": 171,
				"defense": 4
			},
			"properties": {
				"HP_REGEN": 1.07
			},
			"order": 7,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Assault Vest",
				"de_DE": "Assault Vest<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "战术背心",
				"ja_JP": "アサルトベスト<<A<<[CHANGED 2017/08/03]",
				"langUid": 1787,
				"ko_KR": "전사의 의복"
			},
			"description": {
				"en_US": "Ferocious vest forged for fearless front-line fighters. Friggin' fantastic.",
				"de_DE": "Eine furchterregende Weste für furchtlose Frontkämpfer. Verdammt furchtbar.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "为无畏的前线战士打造的坚固盔甲。特牛逼。",
				"ja_JP": "戦線で戦う精悍な戦士のために製造された鮮血のベスト。その成果は精良だ。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1788,
				"ko_KR": "용감한 최전방 전사를 위한 강력한 의복입니다. 아주 기가 막히죠."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 2990,
			"level": 13,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 56,
				"attack": 5,
				"defense": 7
			},
			"properties": {
				"AIM_SPEED": 0.75,
				"ASSAULT": 1.25
			},
			"order": 6,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Recruit's Scope",
				"de_DE": "Recruit's Scope<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "新兵瞄准镜",
				"ja_JP": "新兵のスコープ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1739,
				"ko_KR": "신병의 스코프"
			},
			"description": {
				"en_US": "Cap with a simple scope attached that allows for a faster aim.",
				"de_DE": "Eine Kappe mit einem einfachen Visier für leichteres Zielen.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "带瞄准镜的帽子，可以更快的瞄准。",
				"ja_JP": "銃の照準を素早く合わせるために簡易スコープをつけた帽子。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1740,
				"ko_KR": "더 빠르게 조준할 수 있는 작은 스코프가 달린 모자입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 1740,
			"level": 11,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"defense": 2,
				"focus": 11
			},
			"properties": {
				"AIM_SPEED": 1.25
			},
			"order": 5,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Shady Monocle",
				"de_DE": "Shady Monocle<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "神秘的单片眼镜",
				"ja_JP": "シェイドモノクル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1741,
				"ko_KR": "은밀한 외안경"
			},
			"description": {
				"en_US": "What seems like a desperate attempt at class can reveal a foe's weak spots.",
				"de_DE": "Dieser Ausdruck vermeintlicher Eleganz kann die Schwachpunkte der Feinde offenbaren.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "看上去是某人装贵族用的道具，但实际上能看穿敌人的弱点。",
				"ja_JP": "一見ただの変なファッションだが、実は敵の弱点を見抜くことができる。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1742,
				"ko_KR": "적의 약점을 필사적으로 찾아내는 장비입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 3660,
			"level": 15,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"focus": 20
			},
			"properties": {
				"CRITICAL_DMG": 1.25
			},
			"order": 7,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Key Piece",
				"de_DE": "Schlüsselstück",
				"langUid": 103,
				"zh_CN": "钥匙碎片",
				"ko_KR": "열쇠 조각",
				"ja_JP": "鍵のピース"
			},
			"description": {
				"en_US": "Actually looks like a key, fitting into a triangle-shaped hole.",
				"de_DE": "Sieht aus wie ein Schlüssel für ein passendes, dreieckiges Loch.",
				"langUid": 104,
				"zh_CN": "看着像一把钥匙，可以插入一个三角形的锁眼。",
				"ko_KR": "삼각형 모양의 구멍에 맞는 열쇠 같습니다.",
				"ja_JP": "三角形の穴にはまる形をした鍵のようだ。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"order": 6,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"name": {
				"en_US": "Observatory Key",
				"de_DE": "Obsvt. Schlüssel",
				"langUid": 105,
				"zh_CN": "天文台钥匙",
				"ko_KR": "관측소 열쇠",
				"ja_JP": "観測所の鍵"
			},
			"description": {
				"en_US": "A rather odd looking key. The key bit is shaped like a triangle.",
				"de_DE": "Ein seltsam wirkender Schlüssel. Der vordere Teil ist dreieckig geformt.",
				"langUid": 106,
				"zh_CN": "一把相当老旧的钥匙。有点像一个三角形。",
				"ko_KR": "이상한 모양의 열쇠입니다. 약간 삼각형 모양입니다.",
				"ja_JP": "少し風変わりな鍵。三角形のような形をしている。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"order": 7,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"name": {
				"en_US": "Winner's Proof",
				"de_DE": "Beweis des Sieges",
				"langUid": 107,
				"zh_CN": "胜者的证明",
				"ko_KR": "승리자의 표식",
				"ja_JP": "勝者の証"
			},
			"description": {
				"en_US": "Looks like a heart. Stands for the will of an old kingdom.",
				"de_DE": "Hat die Form eines Herzens. Symbolisiert den Willen eines alten Reiches.",
				"fr_FR": "undefined",
				"langUid": 491,
				"zh_CN": "看起来像一颗心脏。代表着一个过去王国的意志。",
				"ko_KR": "마치 하트 모양 같습니다. 옛 왕국의 의지를 나타냅니다.",
				"ja_JP": "心臓のような見た目をしている。古い王国の意思の象徴。"
			},
			"type": "EQUIP",
			"rarity": 4,
			"cost": 0,
			"level": 1,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 4,
				"defense": 2
			},
			"properties": {
				"XP_ZERO": 0
			},
			"order": 54,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"name": {
				"en_US": "Dented Crown",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "凹损的皇冠",
				"ja_JP": "でこぼこの王冠<<A<<[CHANGED 2017/08/03]",
				"langUid": 1881,
				"ko_KR": "망가진 왕관"
			},
			"description": {
				"en_US": "Though in bad shape now, it was once a regalia of an Ancient civilization in the desert.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "",
				"zh_CN": "尽管现在不好看，它曾一度是这片沙漠中先祖文明的产物。",
				"ja_JP": "今ではその形はでこぼこだが、いにしえの砂漠文明においては王位の象徴だった。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1882,
				"ko_KR": "지금은 모양이 망가졌지만, 한때 사막 고대 문명의 표상이었습니다."
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 35,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1.1,
					1.1,
					1.1,
					1.1
				],
				"hp": 135,
				"defense": 8,
				"focus": 48
			},
			"properties": {
				"RANGED_DMG": 1.1,
				"OVERHEAT_REDUCTION": 1.2
			},
			"order": 18,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Student's Bandana",
				"de_DE": "Student's Bandana<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "学生的头巾",
				"ja_JP": "生徒のバンダナ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1578,
				"ko_KR": "학생의 반다나"
			},
			"description": {
				"en_US": "Keeps sweat out of the eyes and supposedly helps to concentrate.",
				"de_DE": "Hält Schweiß aus den Augen und könnte die Konzentration fördern.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "防止汗水流入眼镜，听说有助于集中注意力。",
				"ja_JP": "汗が目に入るのを防ぎ、集中力を切らさないようにしてくれるらしい。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1579,
				"ko_KR": "눈가의 땀을 방지해주며 집중하는 데 도움을 줍니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 2880,
			"level": 13,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 2,
				"defense": 1,
				"focus": 13
			},
			"properties": {
				"DASH_INVINC": 1.1,
				"PERFECT_GUARD_WINDOW": 1.1
			},
			"order": 6,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Mugger's Blade",
				"de_DE": "Mugger's Blade<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "强盗剑",
				"ja_JP": "シーフブレード<<A<<[CHANGED 2017/08/03]",
				"langUid": 1667,
				"ko_KR": "강도의 칼"
			},
			"description": {
				"en_US": "Small, rusty blade for close quarters. Cheap, yet dangerous.",
				"de_DE": "Kleine, rostige Klinge für den Nahkampf. Billig, aber gefährlich.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一把锈迹斑斑的，为近战准备的小剑。廉价，但危险。",
				"ja_JP": "さび付いた接近戦用の小ナイフ。安いが、あなどれない。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1668,
				"ko_KR": "근접전에 유리한 작고 녹슨 칼입니다. 값싸지만 위험합니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 1690,
			"level": 11,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 10,
				"defense": 2
			},
			"properties": {
				"MELEE_DMG": 1.2
			},
			"order": 8,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Daikon",
				"de_DE": "Daikon<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "萝卜",
				"ja_JP": "ダイコン<<A<<[CHANGED 2017/08/03]",
				"langUid": 1444,
				"ko_KR": "다이콘"
			},
			"description": {
				"en_US": "A huge radish that can be both a fearsome weapon and a healthy meal.",
				"de_DE": "Ein riesiger Rettich. Sowohl furchtbare Waffe als auch gesunde Mahlzeit.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一个巨大的萝卜，既是一件可怕的武器，又是一顿健康的美食。",
				"ja_JP": "恐ろしい武器にも、栄養たっぷりの食事にもなり得る巨大な大根。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1445,
				"ko_KR": "굉장한 무기가 될 수도, 건강한 음식이 될 수도 있는 큰 무입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 2910,
			"level": 13,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 69,
				"attack": 11
			},
			"properties": {
				"HP_REGEN": 1.03
			},
			"order": 9,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "-Hedgetorch NOEZ",
				"de_DE": "",
				"langUid": 117,
				"zh_CN": "-火炬炮NOEZ",
				"ko_KR": "-헤지횃불 NOEZ"
			},
			"description": {
				"en_US": "Weapon of choice for hoodlums with a passion for arson.",
				"de_DE": "",
				"fr_FR": "undefined",
				"zh_CN": "纵火狂们最爱的武器。",
				"langUid": 1235,
				"ko_KR": "방화를 즐기는 불량배들이 주로 사용하는 무기입니다.",
				"ja_JP": "放火を企むチンピラにうってつけの武器。"
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 1000,
			"level": 1,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 15
			},
			"properties": {},
			"order": 57,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"name": {
				"en_US": "Scrappy Plate",
				"de_DE": "Scrappy Plate<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "杂凑盔甲",
				"ja_JP": "スクラッププレート<<A<<[CHANGED 2017/08/03]",
				"langUid": 1789,
				"ko_KR": "대충 만든 판금 갑옷"
			},
			"description": {
				"en_US": "Heavy plate made from spare metal parts. Offers good protection but limits mobility.",
				"de_DE": "Schwere Plattenrüstung aus Ersatzteilen. Guter Schutz, aber schlechte Mobilität.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "用备用金属部件制作的重型盔甲。提供良好的保护，但移动力受限。",
				"ja_JP": "予備の金属パーツでできた重い装甲。防御力は高いが、動きが制限されてしまう。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1790,
				"ko_KR": "남은 금속 재료로 만든 무거운 판금 갑옷입니다. 방어력은 좋지만 움직이는 데 힘이 듭니다."
			},
			"type": "EQUIP",
			"cost": 1750,
			"level": 11,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 55,
				"defense": 11
			},
			"properties": {
				"DASH_INVINC": 0.75,
				"STUN_THRESHOLD": 1.02
			},
			"rarity": 2,
			"order": 5,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Bull Stompers",
				"de_DE": "Bull Stompers<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "公牛践踏者",
				"ja_JP": "ブルストンパー<<A<<[CHANGED 2017/08/03]",
				"langUid": 1540,
				"ko_KR": "황소 구두"
			},
			"description": {
				"en_US": "Shaped like a bulls hooves. Infuses their wearer with obstinacy.",
				"de_DE": "Geformt wie die Hufe eines Bullen. Steigert des Trägers Sturheit.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "形状像公牛蹄，透露出穿戴者的执念。",
				"ja_JP": "牛のひずめを模している。装備する者に牛の強情さを分けてくれる。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1541,
				"ko_KR": "황소의 발굽처럼 생겼습니다. 신는 사람을 끈기 있게 만듭니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 3570,
			"level": 15,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 95,
				"attack": 4,
				"defense": 9
			},
			"properties": {
				"CRITICAL_DMG": 0.75,
				"STUN_THRESHOLD": 1.05
			},
			"order": 6,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Perfect Karrot",
				"de_DE": "Perfekte Karotte",
				"langUid": 123,
				"zh_CN": "完美胡萝卜",
				"ko_KR": "완벽한 캐럿",
				"ja_JP": "パーフェクトカロット"
			},
			"description": {
				"en_US": "It's perfect.",
				"de_DE": "Sie ist perfekt.",
				"fr_FR": "",
				"langUid": 375,
				"zh_CN": "非常完美。",
				"ko_KR": "그저 완벽합니다.",
				"ja_JP": "ただただ完璧。"
			},
			"type": "TRADE",
			"rarity": 3,
			"cost": 1000,
			"level": 1,
			"icon": "item-trade",
			"order": 116,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"name": {
				"en_US": "Precursor Shard",
				"de_DE": "Vorläufer Scherbe<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "先驱者碎片<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "先駆の破片<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "앞선 이의 조각<<A<<[CHANGED 2017/10/17]",
				"langUid": 125
			},
			"description": {
				"en_US": "An old shard used as template in the beta phase of CrossWorlds.",
				"de_DE": "Eine alte Scherbe genutzt als Template für die Beta Phase.<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "在CrossWorlds公测期间作为样板使用的旧碎片。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "クロスワールドのベータテスト中、テンプレートとして使われた古い破片。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "크로스월드 베타 기간 동안 템플릿의 용도로 사용되었던 오래된 조각입니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1197
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			},
			"order": 1,
			"noTrack": true
		},
		{
			"name": {
				"en_US": "Cross Sandwich",
				"de_DE": "Cross Sandwich",
				"fr_FR": "undefined",
				"zh_CN": "神圣三明治",
				"ja_JP": "クロス・サンドイッチ",
				"ko_KR": "크로스 샌드위치",
				"langUid": 127
			},
			"description": {
				"en_US": "The ultimate sandwich made by a legendary cook. \\c[2]Heals 80% of max HP\\c[0].",
				"de_DE": "Das ultimative Sandwich, zubereitet von einem legendären Koch. Heilt 80% der max HP.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一位传奇厨师做的终极三明治。\\c[2]恢复最大血量的80%\\c[0]。<<A<<[CHANGED 2017/07/07]",
				"ja_JP": "伝説の料理人によって作られた究極のサンドイッチ。\\c[2]最大HPの80%を回復\\c[0]。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "전설적인 요리사가 만든 궁극의 샌드위치입니다. \\c[2]최대 HP의 80%를 회복합니다\\c[0].<<A<<[CHANGED 2017/07/21]",
				"langUid": 690
			},
			"type": "CONS",
			"rarity": 0,
			"cost": 5000,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "healing"
			},
			"useSpeed": 1,
			"time": 0,
			"stats": [
				"HEAL-5"
			],
			"order": 6,
			"noTrack": false,
			"foodSprite": "CROISSANT"
		},
		{
			"order": 12,
			"name": {
				"en_US": "Spicy Bun",
				"de_DE": "Würziger Laib",
				"fr_FR": "undefined",
				"zh_CN": "辛辣面包",
				"ja_JP": "スパイスパン",
				"ko_KR": "매운맛 번",
				"langUid": 129
			},
			"description": {
				"en_US": "A well seasoned loaf for heated battles.",
				"de_DE": "Ein ordentlich gewürztes Brötchen für hitzige Gefechte.",
				"fr_FR": "undefined",
				"zh_CN": "为激烈战斗准备的美味面包。",
				"ja_JP": "熱い戦いにふさわしい、とても辛いパン。",
				"ko_KR": "격렬한 전투를 위해 잘 조미된 빵입니다.",
				"langUid": 691
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 200,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 50,
			"stats": [
				"ATTACK-1"
			],
			"noTrack": false,
			"foodSprite": "SPICY_BUN"
		},
		{
			"order": 13,
			"name": {
				"en_US": "Flaming Bun",
				"de_DE": "Feuriger Laib",
				"fr_FR": "undefined",
				"zh_CN": "燃烧面包",
				"ja_JP": "フレイムパン",
				"ko_KR": "불맛 번",
				"langUid": 131
			},
			"description": {
				"en_US": "Bread made with zesty hot sauce. ",
				"de_DE": "Brot mit einer pikant-feurigen Sauce.",
				"fr_FR": "undefined",
				"zh_CN": "涂抹了浓郁辣椒酱的面包。",
				"ja_JP": "ピリッとしたホットソースで味付けされたパン。",
				"ko_KR": "강한 매운 소스가 가미된 빵입니다.",
				"langUid": 692
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 550,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 50,
			"stats": [
				"ATTACK-2"
			],
			"noTrack": false,
			"foodSprite": "SPICY_BUN"
		},
		{
			"order": 14,
			"name": {
				"en_US": "Blazing Bun",
				"de_DE": "Höllischer Laib",
				"fr_FR": "undefined",
				"zh_CN": "狱炎面包",
				"ja_JP": "ブレイズパン",
				"ko_KR": "용암맛 번",
				"langUid": 133
			},
			"description": {
				"en_US": "Brings the eternal inferno right to your mouth.",
				"de_DE": "Wird ein lang andauerndes Inferno in deinem Mund entfachen.",
				"fr_FR": "undefined",
				"zh_CN": "让你的唇舌体会到地狱的感觉。",
				"ja_JP": "地獄の業火をあなたの口にお届け。",
				"ko_KR": "입안 가득 지옥을 맛볼 수 있습니다.",
				"langUid": 693
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 1700,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 50,
			"stats": [
				"ATTACK-3"
			],
			"noTrack": false,
			"foodSprite": "SPICY_BUN"
		},
		{
			"order": 21,
			"name": {
				"en_US": "Veggie Sticks",
				"de_DE": "Veggie Sticks",
				"fr_FR": "undefined",
				"zh_CN": "蔬菜条",
				"ja_JP": "ベジスティック",
				"ko_KR": "채소 꼬치",
				"langUid": 135
			},
			"description": {
				"en_US": "Various vegetables cut into sticks.",
				"de_DE": "Verschiedenes Gemüse, in schnell essbare Form geschnitten.",
				"fr_FR": "undefined",
				"zh_CN": "切成条状的多种蔬菜。",
				"ja_JP": "スティック状にカットされた様々な野菜。",
				"ko_KR": "다양한 채소가 있는 꼬치입니다.",
				"langUid": 694
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 200,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 50,
			"stats": [
				"HP-1"
			],
			"noTrack": false,
			"foodSprite": "VEGGIE_STICKS"
		},
		{
			"order": 22,
			"name": {
				"en_US": "Veggie Wraps",
				"de_DE": "Veggie Wraps",
				"fr_FR": "undefined",
				"zh_CN": "蔬菜卷",
				"ja_JP": "ベジラップ",
				"ko_KR": "채소 랩",
				"langUid": 137
			},
			"description": {
				"en_US": "Fresh wraps made with grilled tofu.",
				"de_DE": "Frische Wraps, gefüllt mit gegrilltem Tofu.",
				"fr_FR": "undefined",
				"zh_CN": "包着烤豆腐的蔬菜卷。",
				"ja_JP": "焼き豆腐と共に作られた新鮮なラップ。",
				"ko_KR": "튀긴 두부가 들어간 신선한 랩입니다.",
				"langUid": 695
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 550,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 50,
			"stats": [
				"HP-2"
			],
			"noTrack": false,
			"foodSprite": "VEGGIE_STICKS"
		},
		{
			"order": 23,
			"name": {
				"en_US": "Veggie Burger",
				"de_DE": "Veggie Burger",
				"fr_FR": "undefined",
				"zh_CN": "蔬菜汉堡",
				"ja_JP": "ベジバーガー",
				"ko_KR": "채소버거",
				"langUid": 139
			},
			"description": {
				"en_US": "Hits your body with pure joy on every bite.",
				"de_DE": "Verursacht mit jedem Bissen ein vegetarisches Feuerwerk des Geschmacks.",
				"fr_FR": "undefined",
				"zh_CN": "每一口都会给你的身体带来纯粹的喜悦。",
				"ja_JP": "一口食べるごとに喜びが体中に広がる。",
				"ko_KR": "씹을 때마다 행복으로 가득해집니다.",
				"langUid": 696
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 1700,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "healing"
			},
			"useSpeed": 1,
			"time": 50,
			"stats": [
				"HP-3"
			],
			"noTrack": false,
			"foodSprite": "VEGGIE_STICKS"
		},
		{
			"order": 15,
			"name": {
				"en_US": "Fruit Drink",
				"de_DE": "Fruchtiger Drink",
				"fr_FR": "undefined",
				"zh_CN": "水果汁",
				"ja_JP": "フルーツドリンク",
				"ko_KR": "과일 주스",
				"langUid": 141
			},
			"description": {
				"en_US": "A refreshing beverage for sunny days.",
				"de_DE": "Ein erfrischendes Getränk für heiße Tage.",
				"fr_FR": "undefined",
				"zh_CN": "一种适宜在阳光明媚的日子畅饮的清凉饮料。",
				"ja_JP": "晴れた日によく合う爽やかな飲み物。",
				"ko_KR": "맑은 날 마시기 좋은 상쾌한 음료입니다.",
				"langUid": 697
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 200,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 50,
			"stats": [
				"DEFENSE-1"
			],
			"noTrack": false,
			"foodSprite": "FRUIT_SALAT"
		},
		{
			"order": 16,
			"name": {
				"en_US": "Fruit Salad",
				"de_DE": "Fruchtsalat",
				"fr_FR": "undefined",
				"zh_CN": "水果沙拉",
				"ja_JP": "フルーツサラダ",
				"ko_KR": "과일 샐러드",
				"langUid": 143
			},
			"description": {
				"en_US": "Healthy salad. Does not contain any tomatoes.",
				"de_DE": "Gesunder Salat. Enthält keine Tomaten.",
				"fr_FR": "undefined",
				"zh_CN": "健康沙拉。不含番茄。",
				"ja_JP": "健康にいいサラダ。トマトは入っていない。",
				"ko_KR": "건강한 샐러드. 토마토는 안 들어가 있습니다.",
				"langUid": 698
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 550,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 50,
			"stats": [
				"DEFENSE-2"
			],
			"noTrack": false,
			"foodSprite": "FRUIT_SALAT"
		},
		{
			"order": 17,
			"name": {
				"en_US": "Fruit Pie",
				"de_DE": "Früchtekuchen",
				"fr_FR": "undefined",
				"zh_CN": "水果派",
				"ja_JP": "フルーツパイ",
				"ko_KR": "과일 파이",
				"langUid": 145
			},
			"description": {
				"en_US": "An exquisite pastry topped with exotic fruits.",
				"de_DE": "Ein exquisites, mit exotischen Früchten belegtes Gebäck.",
				"fr_FR": "undefined",
				"zh_CN": "精致的糕点，点缀着带有异域风情的水果。",
				"ja_JP": "珍しいフルーツでトッピングされた最高級のパイ。",
				"ko_KR": "이국적인 과일들로 장식된 정교한 페이스트리입니다.",
				"langUid": 699
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 1700,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 50,
			"stats": [
				"DEFENSE-3"
			],
			"noTrack": false,
			"foodSprite": "FRUIT_SALAT"
		},
		{
			"order": 18,
			"name": {
				"en_US": "Rice Cracker",
				"de_DE": "Reiscracker",
				"fr_FR": "undefined",
				"zh_CN": "脆米饼",
				"ja_JP": "ライスクラッカー",
				"ko_KR": "쌀 과자",
				"langUid": 147
			},
			"description": {
				"en_US": "A cracker made of rice. It's a bit salty. ",
				"de_DE": "Ein Cracker aus Reis. Schmeckt etwas salzig.",
				"fr_FR": "undefined",
				"zh_CN": "用米做成的薄脆饼干。有点咸。",
				"ja_JP": "米でできたクラッカー。少し塩気が強い。",
				"ko_KR": "쌀로 만들어진 과자입니다. 짭짤합니다.",
				"langUid": 700
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 200,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 50,
			"stats": [
				"FOCUS-1"
			],
			"noTrack": false,
			"foodSprite": "RICE_CRACKER"
		},
		{
			"order": 19,
			"name": {
				"en_US": "Tofu Cracker",
				"de_DE": "Tofu Cracker",
				"fr_FR": "undefined",
				"zh_CN": "豆腐饼干",
				"ja_JP": "トーフクラッカー",
				"ko_KR": "두부 과자",
				"langUid": 149
			},
			"description": {
				"en_US": "Perfect with a tiny bit of soy milk.",
				"de_DE": "Geht perfekt mit etwas Sojamilch.",
				"fr_FR": "undefined",
				"zh_CN": "配上豆浆，绝了。",
				"ja_JP": "豆乳に少し付けて食べるのがオススメ。",
				"ko_KR": "약간의 두유와 함께 먹으면 환상적입니다.",
				"langUid": 701
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 550,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 50,
			"stats": [
				"FOCUS-2"
			],
			"noTrack": false,
			"foodSprite": "RICE_CRACKER"
		},
		{
			"order": 20,
			"name": {
				"en_US": "Cheese Cracker",
				"de_DE": "Cheese Cracker",
				"fr_FR": "undefined",
				"zh_CN": "奶酪饼干",
				"ja_JP": "チーズクラッカー",
				"ko_KR": "치즈 과자",
				"langUid": 151
			},
			"description": {
				"en_US": "The classic cheese cracker. Never gets old. Never.",
				"de_DE": "Der klassische Käsecracker. Wird immer gut sein. Immer.",
				"fr_FR": "undefined",
				"zh_CN": "经典奶酪饼干。真是永恒经典。",
				"ja_JP": "昔ながらのチーズクラッカー。いつまでも人気。絶対に。",
				"ko_KR": "일반적인 치즈 과자입니다. 절대 질리지 않습니다. 절대.",
				"langUid": 702
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 1700,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 50,
			"stats": [
				"FOCUS-3"
			],
			"noTrack": false,
			"foodSprite": "RICE_CRACKER"
		},
		{
			"order": 26,
			"name": {
				"en_US": "Salty Ice Cream",
				"de_DE": "Salzige Eiscreme",
				"fr_FR": "undefined",
				"zh_CN": "咸冰淇淋",
				"ja_JP": "ソルトアイスクリーム",
				"ko_KR": "짠맛 아이스크림",
				"langUid": 153
			},
			"description": {
				"en_US": "Best enjoyed at sunset on top of a clocktower.",
				"de_DE": "Wird am besten bei Sonnenuntergang an der Spitze eines Uhrturms gegessen.",
				"fr_FR": "undefined",
				"zh_CN": "最适合在黄昏时分的钟楼顶端品尝。",
				"ja_JP": "時計塔のてっぺんで夕焼けを見ながら食べるのが最高。",
				"ko_KR": "시계탑에서 해 질 녘을 바라보면 먹는 아이스크림은 최고입니다.",
				"langUid": 1277
			},
			"type": "CONS",
			"rarity": 2,
			"cost": 450,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 35,
			"stats": [
				"HP-1",
				"DEFENSE-1"
			],
			"noTrack": false,
			"foodSprite": "SALTY_ICE_CREAM"
		},
		{
			"order": 27,
			"name": {
				"en_US": "Chili Con Carne",
				"de_DE": "Chili Con Carne",
				"fr_FR": "undefined",
				"zh_CN": "香辣肉酱",
				"ja_JP": "チリコンカルネ",
				"ko_KR": "칠리 콘 카르네",
				"langUid": 155
			},
			"description": {
				"en_US": "Prepare for mild to severe discomfort.",
				"de_DE": "Stell dich auf leichte bis heftige Verstimmungen ein.",
				"fr_FR": "undefined",
				"zh_CN": "注意，食用后可能造成轻微或强烈不适。",
				"ja_JP": "辛いので覚悟して食べよう。",
				"ko_KR": "극도로 불쾌하니 마음의 준비를 하세요.",
				"langUid": 1278
			},
			"type": "CONS",
			"rarity": 2,
			"cost": 450,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 35,
			"stats": [
				"ATTACK-1",
				"FOCUS-1"
			],
			"noTrack": false,
			"foodSprite": "CHILLI"
		},
		{
			"order": 28,
			"name": {
				"en_US": "Ginger Tom. Salad",
				"de_DE": "Ginger Tom. Salat",
				"fr_FR": "undefined",
				"zh_CN": "生姜番茄沙拉",
				"ja_JP": "ショウガトマトサラダ",
				"ko_KR": "생강 토마토 샐러드",
				"langUid": 157
			},
			"description": {
				"en_US": "A rare type of tomato salad seasoned with some ginger and salt. ",
				"de_DE": "Ein spezieller Tomatensalat, gewürzt mit Ingwer und Salz.",
				"fr_FR": "undefined",
				"zh_CN": "一种少见的番茄沙拉，拌有少许生姜和盐。",
				"ja_JP": "ショウガと塩で味付けをした珍しいトマトサラダ。",
				"ko_KR": "생강과 소금으로 맛을 낸 희귀한 토마토 샐러드입니다.",
				"langUid": 705
			},
			"type": "CONS",
			"rarity": 2,
			"cost": 800,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 35,
			"stats": [
				"DEFENSE-2",
				"FOCUS-2"
			],
			"noTrack": false,
			"foodSprite": "FRUIT_SALAT"
		},
		{
			"order": 9,
			"name": {
				"en_US": "Pepper Night Tea",
				"de_DE": "Pfeffer Nachttee",
				"fr_FR": "undefined",
				"zh_CN": "胡椒晚茶",
				"ja_JP": "ペッパーナイト・ティー",
				"ko_KR": "페퍼 나이트 티",
				"langUid": 159
			},
			"description": {
				"en_US": "Perfect to shortly keep you warm on a cold winter night.",
				"de_DE": "Perfekt um sich in kalten Winternächten aufzuwärmen.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "寒冷冬日里短暂取暖的良方。",
				"ja_JP": "寒い冬の夜、体を温めるのに適している紅茶。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "추운 겨울밤 몸을 따뜻하게 데워줍니다.",
				"langUid": 1395
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 3400,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "healing"
			},
			"useSpeed": 1,
			"time": 40,
			"stats": [
				"REGEN-3"
			],
			"noTrack": false,
			"foodSprite": "GREEN_TEA"
		},
		{
			"order": 75,
			"name": {
				"en_US": "Headphone Scraps",
				"de_DE": "Kopfhörer Schrott",
				"langUid": 161,
				"zh_CN": "耳机碎片",
				"ko_KR": "헤드폰 부품",
				"ja_JP": "ヘッドホンのかけら"
			},
			"description": {
				"en_US": "Someone must have hit it with a blunt object at high velocity.",
				"de_DE": "Irgendjemand muss sie mit einem stumpfen Objekt zerdeppert haben.",
				"langUid": 162,
				"zh_CN": "肯定是被高速钝物打碎的。",
				"ko_KR": "둔탁한 물건으로 빠르게 내리친 게 분명합니다.",
				"ja_JP": "誰かが思いっきり鈍器で殴ったに違いない。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 150,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 74,
			"name": {
				"en_US": "Metal Needles",
				"de_DE": "Metallnadeln",
				"langUid": 163,
				"zh_CN": "金属针",
				"ko_KR": "금속 바늘",
				"ja_JP": "メタルニードル"
			},
			"description": {
				"en_US": "Pointy needles plucked from a \\v[combat.name.hedgehog]. Ouch! Told you so.",
				"de_DE": "Spitze Nadeln eines Igels. Autsch! Ich habe dich gewarnt.",
				"fr_FR": "undefined",
				"langUid": 376,
				"zh_CN": "从\\v[combat.name.hedgehog]身上拔下的尖针。小心扎手。",
				"ko_KR": "\\v[combat.name.hedgehog]에게서 얻을 수 있는 뾰족한 바늘입니다. 아야! 거봐요, 뾰족하다고 했죠?",
				"ja_JP": "\\v[combat.name.hedgehog]からむしり取った鋭い針。いたっ！だから言ったのに。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 76,
			"name": {
				"en_US": "Bovine Skin",
				"de_DE": "Bovine Haut",
				"langUid": 165,
				"zh_CN": "牛皮",
				"ko_KR": "들소 가죽",
				"ja_JP": "ブルスキン"
			},
			"description": {
				"en_US": "Actual skin from Bovines which feel almost like leather.",
				"de_DE": "Echte Haut von Bovinen, welche sich fast wie Leder anfühlt.",
				"langUid": 166,
				"zh_CN": "牛身上的皮。摸起来很有皮的感觉。",
				"ko_KR": "가죽의 촉감과 비슷한 들소의 피부입니다.",
				"ja_JP": "なめし革のような肌触りをした、ウシ系モンスターの皮。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 250,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 8,
			"name": {
				"en_US": "Edgy Headphones",
				"de_DE": "Edgy Headphones<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "前卫耳机",
				"ja_JP": "先端的なヘッドホン<<A<<[CHANGED 2017/08/03]",
				"langUid": 1743,
				"ko_KR": "멋진 헤드폰"
			},
			"description": {
				"en_US": "Nobody really knows where hillkats get them but they sound amazing.",
				"de_DE": "Niemand weiß woher die Hillkats sie haben, aber sie klingen großartig.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "不知道那些小怪是从哪里找来的这些耳机，不过它们的音效真的很棒。",
				"ja_JP": "ヒルキャットがこれをどこで手に入れたかは不明だが、音質は最高だ。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1744,
				"ko_KR": "힐캣이 어디서 이걸 구해온 지는 아무도 모르지만, 소리는 굉장합니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 4170,
			"level": 17,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 3,
				"defense": 2,
				"focus": 18
			},
			"properties": {
				"RANGED_DMG": 1.1,
				"AIMING_MOVEMENT": 1.1
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 13,
			"name": {
				"en_US": "Climbing Pick",
				"de_DE": "Climbing Pick<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "登山锄",
				"ja_JP": "クライムピック<<A<<[CHANGED 2017/08/03]",
				"langUid": 1669,
				"ko_KR": "등산 스틱"
			},
			"description": {
				"en_US": "Useful to have when traveling the mountains and fighting snowbeasts.",
				"de_DE": "Nützlich wenn man durch die Berge wandert und Schneemonster bekämpft.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "适用于山中旅行以及同雪怪战斗。",
				"ja_JP": "山上りをする時や、雪山の獣と戦う時に重宝する。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1670,
				"ko_KR": "산을 오를 때나 눈 괴물과 싸울 때 유용합니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 5050,
			"level": 19,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 16,
				"focus": 11
			},
			"properties": {
				"CRITICAL_DMG": 1.5
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 28,
			"name": {
				"en_US": "Boom Walkers",
				"de_DE": "Boom Walkers<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "隆隆行走者",
				"ja_JP": "ブーストウォーカー<<A<<[CHANGED 2017/08/03]",
				"langUid": 1907,
				"ko_KR": "붐 워커"
			},
			"description": {
				"en_US": "Ideal for those who aspire to move at high velocities.",
				"de_DE": "Perfekt für die, die hohe Geschwindigkeiten anstreben.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "非常适合那些希望以高速移动的人。",
				"ja_JP": "高速で移動をしたい者に完璧の装備。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1908,
				"ko_KR": "빠르게 걷는 것을 좋아하는 사람에게 유용합니다."
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 26,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 111,
				"attack": 7,
				"defense": 4,
				"focus": 21
			},
			"properties": {
				"AIMING_MOVEMENT": 1.25,
				"DASH_INVINC": 1.5
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 10147,
			"name": {
				"en_US": "Golden Ring",
				"de_DE": "Goldener Ring",
				"langUid": 173,
				"zh_CN": "金戒指",
				"ko_KR": "황금 반지",
				"ja_JP": "ゴールデンリング"
			},
			"description": {
				"en_US": "If you don't have one, you might get yourself killed.",
				"de_DE": "Wenn du keinen besitzt, schwebst du vielleicht in Lebensgefahr.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "如果你还没有一个，活在世上有什么意义呢。",
				"ja_JP": "持ってないと死ぬかもしれない。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1373,
				"ko_KR": "만약 이 반지가 없다면 반성하세요."
			},
			"type": "TRADE",
			"rarity": 3,
			"cost": 0,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 29,
			"name": {
				"en_US": "Chili Dog",
				"de_DE": "Chili Dog",
				"fr_FR": "undefined",
				"zh_CN": "辣狗",
				"ja_JP": "チリドッグ",
				"ko_KR": "칠리도그",
				"langUid": 175
			},
			"description": {
				"en_US": "Chili Con Carne in a bun. The favorite food of blue hedgehogs.",
				"de_DE": "Chili Con Carne in einem Brötchen. Das Lieblingsessen blauer Igel.",
				"fr_FR": "undefined",
				"zh_CN": "面包里夹着香辣肉酱。蓝色刺猬最喜欢的食物。",
				"ja_JP": "バンに入ったチリコンカルネ。ブルー・ヘッジハッグの好物。",
				"ko_KR": "칠리 콘 카르네가 들어간 번입니다. 파란 고슴도치가 가장 좋아하는 음식이죠.",
				"langUid": 706
			},
			"type": "CONS",
			"rarity": 2,
			"cost": 800,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 35,
			"stats": [
				"ATTACK-2",
				"FOCUS-2"
			],
			"noTrack": false,
			"foodSprite": "CHILLI_DOG"
		},
		{
			"order": 72,
			"name": {
				"en_US": "Raw Meat",
				"de_DE": "Rohes Fleisch",
				"langUid": 177,
				"zh_CN": "生肉",
				"ko_KR": "생고기",
				"ja_JP": "生肉"
			},
			"description": {
				"en_US": "Meat from animals brutally butchered in the wild.",
				"de_DE": "Fleisch von Tieren die in freier Natur grauenvoll niedergestreckt wurden.",
				"fr_FR": "undefined",
				"langUid": 808,
				"zh_CN": "在野外被残忍宰杀的动物肉块。",
				"ko_KR": "야생에서 잔인하게 도살된 동물의 고기입니다.",
				"ja_JP": "野生生物を容赦なくほふって得られた肉。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 250,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1
		},
		{
			"order": 49,
			"name": {
				"en_US": "Core Drill",
				"de_DE": "Core Drill<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "核心钻",
				"ja_JP": "コアドリル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1671,
				"ko_KR": "코어 드릴"
			},
			"description": {
				"en_US": "Almost tiny drill whose strength depends on the willpower of the user.",
				"de_DE": "Ein geradezu winziger Bohrer, dessen Stärke auf Willenskraft basiert.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "很小的钻头，效果取决于使用者的意志力。",
				"ja_JP": "その強さは使うものの意思の力に比例する、小さいドリル。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1672,
				"ko_KR": "사용자의 힘에 따라 달라지는 작은 드릴입니다."
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 10,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 15,
				"attack": 7,
				"focus": 2
			},
			"properties": {
				"DROP_CHANCE": 1.2
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 50,
			"name": {
				"en_US": "Giga Spiral Drill",
				"de_DE": "Giga Spiral Drill<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "千兆螺旋钻",
				"ja_JP": "ギガ・スパイラルドリル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1673,
				"ko_KR": "기가 나선 드릴"
			},
			"description": {
				"en_US": "Said to be able to pierce through the heaven itself.",
				"de_DE": "Kann Legenden zufolge selbst den Himmel durchbohren.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "据说它连天堂都能一气贯穿。",
				"ja_JP": "その威力は天をも貫くと言われるドリル。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1674,
				"ko_KR": "천국까지도 뚫을 수 있다는 얘기가 있습니다."
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 30,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 80,
				"attack": 34,
				"focus": 14
			},
			"properties": {
				"DROP_CHANCE": 1.3
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 12,
			"name": {
				"en_US": "Autumn Leaves",
				"de_DE": "Autumn Blatt",
				"langUid": 183,
				"zh_CN": "秋叶",
				"ko_KR": "가을의 낙엽",
				"ja_JP": "オータムリーフ"
			},
			"description": {
				"en_US": "Simple leaves commonly found in Autumn's Rise.",
				"de_DE": "Ein gewöhnliches Blatt, welches häufig in der Autumn's Rise zu finden ist.",
				"fr_FR": "undefined",
				"langUid": 772,
				"zh_CN": "秋色山野常见的树叶。",
				"ko_KR": "가을의 부상에서 쉽게 찾아볼 수 있는 낙엽입니다.",
				"ja_JP": "オータムライズでよく見かける普通の葉っぱ。"
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 13,
			"name": {
				"en_US": "Season Apples",
				"de_DE": "Season Apfel",
				"langUid": 185,
				"zh_CN": "时节苹果",
				"ko_KR": "계절 사과",
				"ja_JP": "旬のリンゴ"
			},
			"description": {
				"en_US": "Eating them apparently helps to keep the doctor away for one day.",
				"de_DE": "Angeblich hält ihr Verzehr Ärzte für einen Tag fern.",
				"langUid": 186,
				"zh_CN": "据说吃一个就能让医生远离一天时间。",
				"ko_KR": "이 사과를 먹으면 하루 동안 의사를 안 봐도 된답니다.",
				"ja_JP": "食べた人は最低1日は健康でいられる。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 15,
			"name": {
				"en_US": "Gold Beetle",
				"de_DE": "Goldener Käfer",
				"langUid": 187,
				"zh_CN": "金甲虫",
				"ko_KR": "금색 딱정벌레",
				"ja_JP": "ゴールドビートル"
			},
			"description": {
				"en_US": "These little bugs hide on plants near rivers and only come out to search for food.",
				"de_DE": "Diese kleinen Käfer verstecken sich in Uferpflanzen, außer sie suchen Nahrung.",
				"langUid": 188,
				"zh_CN": "这些小虫隐藏在河流附近的植物上，只会在觅食时出现。",
				"ko_KR": "강가에 있는 풀 속에 숨어 살며, 먹이를 찾을 때만 밖으로 나오는 작은 벌레입니다.",
				"ja_JP": "川沿いの植物に隠れ住むこの小さな虫は、食事を探すとき以外出てくることはない。"
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 16,
			"name": {
				"en_US": "Twilight Dew",
				"de_DE": "Zwielicht Juwel",
				"langUid": 189,
				"zh_CN": "晨光露",
				"ko_KR": "황혼의 이슬",
				"ja_JP": "トワイライトデュー"
			},
			"description": {
				"en_US": "Used to grow rare plants that need pure and clean water.",
				"de_DE": "Brachte einst seltene Pflanzen zum Wachsen, die das reinste Wasser brauchten.",
				"langUid": 190,
				"zh_CN": "用于培养需要纯净水的稀有植物。",
				"ko_KR": "순수하고 깨끗한 희귀 식물을 키우는 데 쓰입니다.",
				"ja_JP": "きれいな真水でのみ育つ珍しい植物の育成に使われる。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 14,
			"name": {
				"en_US": "Bear Cicada",
				"de_DE": "Bärenzikade",
				"langUid": 191,
				"zh_CN": "熊蝉",
				"ko_KR": "곰 매미",
				"ja_JP": "ヒグマゼミ"
			},
			"description": {
				"en_US": "A rare autumn bug who only chants his melody in bright moonlight.",
				"de_DE": "Ein seltener Herbstkäfer, dessen Gesang nur im hellen Mondschein erklingt.",
				"langUid": 192,
				"zh_CN": "一种在秋日出现的稀有昆虫，只会在月光下吟唱它的旋律。",
				"ko_KR": "밝은 달빛 아래에서만 노래를 부르는 희귀한 가을벌레입니다.",
				"ja_JP": "珍しい秋の虫。まぶしい月の光の下でのみその音色を奏でる。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 200,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 17,
			"name": {
				"en_US": "Azure Dragonfly",
				"de_DE": "Azur Drachenfliege",
				"langUid": 193,
				"zh_CN": "蓝蜻蜓",
				"ko_KR": "하늘색 잠자리",
				"ja_JP": "アズールトンボ"
			},
			"description": {
				"en_US": "These beautiful creatures sparkle azure blue at dawn until the sun sets.",
				"de_DE": "Diese wunderschönen Wesen glänzen in der Dämmerung Azurblau, bis die Sonne untergeht.",
				"fr_FR": "undefined",
				"langUid": 686,
				"zh_CN": "这些美丽的生物从黎明到日落都闪耀着湛蓝色的光芒。",
				"ko_KR": "이 아름다운 생물은 동트기 전 새벽까지 푸른 빛을 뿜어냅니다.",
				"ja_JP": "この美しい虫は、日が落ちるまでその群青色の光を発しながら飛び回る。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 200,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 1,
			"name": {
				"en_US": "Veggie Set",
				"de_DE": "Veggie Set",
				"langUid": 195,
				"zh_CN": "蔬菜套餐",
				"ko_KR": "채소 세트",
				"ja_JP": "ベジーセット"
			},
			"description": {
				"en_US": "Mostly obtained from traders. Contains everything from beans to sweet potatoes. ",
				"de_DE": "Erhältlich bei Händlern. Enthält alles von Bohnen bis Süßkartoffeln.",
				"fr_FR": "undefined",
				"zh_CN": "通常从商贩处购得。从豌豆到甜薯应有尽有。",
				"langUid": 1187,
				"ko_KR": "상인으로부터 획득할 수 있습니다. 콩부터 고구마까지, 없는 게 없습니다.",
				"ja_JP": "主にトレーダーから入手することができる。豆からサツマイモまでよりどりみどり。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 2,
			"name": {
				"en_US": "Fruit Set",
				"de_DE": "Früchte Set",
				"langUid": 197,
				"zh_CN": "水果套餐",
				"ko_KR": "과일 세트",
				"ja_JP": "フルーツセット"
			},
			"description": {
				"en_US": "Mostly obtained from traders. Contains everything from bananas to strawberries.",
				"de_DE": "Erhältlich bei Händlern. Enthält alles von Bananen bis Erdbeeren.",
				"fr_FR": "undefined",
				"langUid": 458,
				"zh_CN": "通常从商贩处购得。从香蕉到草莓应有尽有。",
				"ko_KR": "상인으로부터 획득할 수 있습니다. 바나나부터 딸기까지, 없는 게 없습니다.",
				"ja_JP": "トレーダーから主に入手することができる。バナナからイチゴまでよりどりみどり。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 4,
			"name": {
				"en_US": "Junk Metal",
				"de_DE": "Altmetall",
				"langUid": 199,
				"zh_CN": "垃圾金属",
				"ko_KR": "금속 폐품",
				"ja_JP": "ジャンクメタル"
			},
			"description": {
				"en_US": "Various metal parts. Might look old but could be used to create new equipment.",
				"de_DE": "Verschiedene Metallteile. Daraus könnte trotz des Alters noch neue Ausrüstung entstehen.",
				"fr_FR": "undefined",
				"langUid": 502,
				"zh_CN": "各式各样的金属部件。看起来陈旧破烂，但是可以用来创造新设备。",
				"ko_KR": "다양한 금속 부품. 오래되어 보이지만 새로운 장비를 만들 수도 있습니다.",
				"ja_JP": "様々な金属の部品。見た目こそ古いが新しい装備の部品として使うことができる。"
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 90,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 114,
			"name": {
				"en_US": "Spiral Gem",
				"de_DE": "Spiral Juwel",
				"langUid": 201,
				"zh_CN": "螺旋宝石",
				"ko_KR": "나선 보석",
				"ja_JP": "スパイラルジェム"
			},
			"description": {
				"en_US": "A rare gem which forms a strange helix spiral.",
				"de_DE": "Ein seltenes Juwel, das eine seltsame Helixspirale formt.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一种罕见的宝石，形状像一个奇怪的螺旋。",
				"ja_JP": "奇妙ならせんを描く珍しい宝石。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1374,
				"ko_KR": "특이한 나선을 만들어내는 희귀한 보석입니다."
			},
			"type": "TRADE",
			"rarity": 3,
			"cost": 0,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 31,
			"name": {
				"en_US": "Sparkly Boots",
				"de_DE": "Sparkly Boots<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "发光靴",
				"ja_JP": "スパークルブーツ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1542,
				"ko_KR": "빛나는 신발"
			},
			"description": {
				"en_US": "They will make you sparkle with every step. Literally.",
				"de_DE": "Werden jedem deiner Schritte neuen Glanz verleihen.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "能让你的每一步都闪闪发光。真的。",
				"ja_JP": "このブーツをはけば、一歩一歩がキラキラにあふれる。文字通りに。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1543,
				"ko_KR": "한 발 한 발 빛이 나게 해줍니다. 말 그대로요."
			},
			"type": "EQUIP",
			"rarity": 4,
			"cost": 0,
			"level": 13,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 50,
				"defense": 4,
				"focus": 8
			},
			"properties": {},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"order": 21,
			"name": {
				"en_US": "Gunner's Trigger",
				"de_DE": "Gunner's Trigger<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "枪手的枪",
				"ja_JP": "ガンナートリガー<<A<<[CHANGED 2017/08/03]",
				"langUid": 1859,
				"ko_KR": "사수의 방아쇠"
			},
			"description": {
				"en_US": "Ranged weapon, ideal to defend a fortified border against hostile neighbors.",
				"de_DE": "Ideal um eine befestige Grenze gegen feindselige Nachbarn zu verteidigen.<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "远程武器，保卫边境、抵御邻国进攻的理想武器。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "国境の城壁に立てこもって近隣国の襲撃を退けるのに最適な遠距離武器。<<A<<[CHANGED 2017/11/04]",
				"langUid": 1860,
				"ko_KR": "적으로부터 단단한 경계를 방어하는 데 탁월한 중거리 무기입니다.<<A<<[CHANGED 2017/11/16]"
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 19210,
			"level": 29,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 37,
				"focus": 15
			},
			"properties": {
				"RANGED_DMG": 1.2
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 24,
			"name": {
				"en_US": "Feather Leaf",
				"de_DE": "Federblatt",
				"langUid": 207,
				"zh_CN": "羽毛树叶",
				"ko_KR": "깃털 잎",
				"ja_JP": "フェザーリーフ"
			},
			"description": {
				"en_US": "A single leaf from the infamous Feather Trees only found on Bergen Trail.",
				"de_DE": "Ein einzelnes Blatt von den berüchtigten Feather Trees vom Bergen-Trail.",
				"langUid": 208,
				"zh_CN": "一片来自声名狼藉羽毛树的树叶，该树只生长在卑尔根之路地区。",
				"ko_KR": "베르겐 산길의 악명 높은 깃털 나무에서만 나오는 잎입니다.",
				"ja_JP": "ベルゲンの山道にしか生えない、悪名高い羽根の木から取れる葉っぱ。"
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 25,
			"name": {
				"en_US": "Rusty Bits",
				"de_DE": "Rostige Teile",
				"langUid": 209,
				"zh_CN": "锈蚀的物件",
				"ko_KR": "낡은 조각",
				"ja_JP": "さびたがらくた"
			},
			"description": {
				"en_US": "Nuts and Bolts. Ancient history says they where once used as currency.",
				"de_DE": "Muttern und Bolzen. Laut antiker Geschichte wurden sie einst als Währung benutzt.",
				"langUid": 210,
				"zh_CN": "螺母和螺栓。先祖的历史上说它们一度被当作货币使用。",
				"ko_KR": "너트와 볼트. 고대에는 화폐로도 쓰였다고 합니다.",
				"ja_JP": "ナットとボルト。その昔通貨として使われていたこともあるらしい。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 26,
			"name": {
				"en_US": "Frozen Tear",
				"de_DE": "Gefrorene Träne",
				"langUid": 211,
				"zh_CN": "冰冻眼泪",
				"ko_KR": "언 눈물",
				"ja_JP": "凍った涙"
			},
			"description": {
				"en_US": "Dropped by solitary conifer trees. Could this crystal cone be a sign of their loneliness?",
				"de_DE": "Fällt von einsamen Nadelbäumen. Ist dieser Kristallzapfen ein Zeichen der Einsamkeit?",
				"langUid": 212,
				"zh_CN": "从孤生的针叶树上落下。这些锥型的水晶是它们孤独的象征吗？",
				"ko_KR": "외로운 침엽수가 흘린 눈물. 이 원뿔 모양 크리스털이 그들의 외로움의 표시일까요?",
				"ja_JP": "一本松からこぼれたもの。この氷の松ぼっくりは一本松の孤独の象徴なのだろうか？"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 200,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 27,
			"name": {
				"en_US": "Pike Wood",
				"de_DE": "Pike Wood",
				"langUid": 213,
				"zh_CN": "梭子木",
				"ko_KR": "뾰족한 목재",
				"ja_JP": "とがった木材"
			},
			"description": {
				"en_US": "Falling butt first on these sure must hurt. So you better watch out!",
				"de_DE": "Rückwärts hier drauf zu fallen muss richtig weh tun. Also pass lieber auf!",
				"langUid": 214,
				"zh_CN": "一屁股坐在这玩意上可不会好受。所以你最好小心点！",
				"ko_KR": "엉덩이로 이 위에 떨어지면 꽤 아프겠군요. 조심하는 게 좋을 거예요!",
				"ja_JP": "お尻から落ちたらケガは避けられない。気を付けよう！"
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 28,
			"name": {
				"en_US": "Purple Ore Lump",
				"de_DE": "",
				"langUid": 215,
				"zh_CN": "紫色矿石块",
				"ko_KR": "보라색 광석 덩어리",
				"ja_JP": "紫の原石塊"
			},
			"description": {
				"en_US": "Common metal ore probably found in one of the many mining shafts. ",
				"de_DE": "Ist vermutlich aus einem der vielen Minenschächten gefallen.",
				"fr_FR": "undefined",
				"langUid": 333,
				"zh_CN": "普通的金属矿石，可以在许多开采的矿井中找到。",
				"ko_KR": "다양한 수갱에서 보통 찾을 수 있는 금속 광석입니다.",
				"ja_JP": "鉱山でよく見つかる金属の原石。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 29,
			"name": {
				"en_US": "Winter Thorn",
				"de_DE": "Winterdorne",
				"langUid": 217,
				"zh_CN": "冬荆棘",
				"ko_KR": "겨울의 가시",
				"ja_JP": "冬のいばら"
			},
			"description": {
				"en_US": "Once used as material for nobility furniture. But who wants to sit on a spiky throne?",
				"de_DE": "Einst das Holz für Möbel des Adels. Aber wer will schon auf einem spitzen Thron sitzen?",
				"langUid": 218,
				"zh_CN": "曾被贵族用来当作家具的材料。但是谁会想坐带刺的椅子呢？",
				"ko_KR": "한때 귀족 가구의 재료로 쓰였습니다. 하지만 누가 뾰족한 가시 위에 앉고 싶을까요?",
				"ja_JP": "王族が家具の素材として使っていたことがある。でもとげとげの王座に座りたい人なんているんだろうか？"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 200,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 33,
			"name": {
				"en_US": "Bergen Ice",
				"de_DE": "Bergen Eis",
				"langUid": 219,
				"zh_CN": "卑尔根冰块",
				"ko_KR": "베르겐 얼음",
				"ja_JP": "ベルゲンの氷"
			},
			"description": {
				"en_US": "Ice fresh from Bergen Trail.",
				"de_DE": "Eis, frisch vom Bergen-Trail.",
				"langUid": 220,
				"zh_CN": "产自卑尔根之路的新鲜冰块。",
				"ko_KR": "베르겐 산길의 얼음입니다.",
				"ja_JP": "ベルゲンの山道直送の氷。"
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 32,
			"name": {
				"en_US": "Bergen Ice Cream",
				"de_DE": "Bergen Eiscreme",
				"fr_FR": "undefined",
				"zh_CN": "卑尔根冰淇淋",
				"ja_JP": "ベルゲンアイスクリーム",
				"ko_KR": "베르겐 아이스크림",
				"langUid": 221
			},
			"description": {
				"en_US": "Makes you feel incredibly cool inside.",
				"de_DE": "Gibt dir innerlich ein unglaublich kühles Gefühl.",
				"fr_FR": "undefined",
				"zh_CN": "透心凉。",
				"ja_JP": "体の内側からとてもクールになっていく。",
				"ko_KR": "찌릿할 정도로 춥게 만듭니다.",
				"langUid": 957
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 200,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 30,
			"stats": [
				"HEAT-RES-2"
			],
			"noTrack": false,
			"foodSprite": "ICE_CREAM_S"
		},
		{
			"order": 11,
			"name": {
				"en_US": "Battered Fist",
				"de_DE": "Battered Fist<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "破旧拳套",
				"ja_JP": "ぼろぼろのグローブ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1677,
				"ko_KR": "낡은 장갑"
			},
			"description": {
				"en_US": "This gauntlet may have seen better days but can still take and dish out a solid beating.",
				"de_DE": "Dieser abgenutzte Panzerhandschuh kann immer noch ordentlich einstecken und austeilen.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "虽然外表已经破旧，但是仍然耐用。",
				"ja_JP": "この籠手も今はぼろぼろだが、まだまだ現役で敵をぼこぼこにすることができる。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1678,
				"ko_KR": "이 장갑은 오래되었지만, 아직도 강력한 힘으로 공격을 가할 수 있습니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 4100,
			"level": 17,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 10,
				"defense": 14
			},
			"properties": {
				"SPIKE_DMG": 1.25,
				"GUARD_STRENGTH": 1.25
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 15,
			"name": {
				"en_US": "Copper Gull",
				"de_DE": "Copper Gull<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "铜海鸥",
				"ja_JP": "カッパーガル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1679,
				"ko_KR": "구리 갈매기"
			},
			"description": {
				"en_US": "This long-ranged weapon is often used by soldiers at sea.",
				"de_DE": "Diese weitreichende Waffe wird oft von Soldaten zur See benutzt.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "海军使用的一种远程武器。",
				"ja_JP": "この遠距離武器は海の兵士がよく使う。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1680,
				"ko_KR": "해안가의 군인들이 가끔 이 원거리 무기를 사용합니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 6180,
			"level": 21,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 27,
				"focus": 6
			},
			"properties": {
				"AIMING_MOVEMENT": 0.85,
				"KNOCKBACK": 1.35,
				"RANGED_DMG": 1.2
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 12,
			"name": {
				"en_US": "Iron Edge",
				"de_DE": "Iron Edge<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "铁刃",
				"ja_JP": "アイアンエッジ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1454,
				"ko_KR": "철검"
			},
			"description": {
				"en_US": "A sharp and reliable classic of warfare.",
				"de_DE": "Ein scharfer und bewährter Klassiker der Kriegsführung.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一种适用于战争的经典锐器。",
				"ja_JP": "戦争において頼りになる、昔ながらの鋭い武器。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1455,
				"ko_KR": "뾰족하고 믿을 수 있는 전쟁의 고전적인 무기입니다."
			},
			"type": "EQUIP",
			"rarity": 1,
			"cost": 4500,
			"level": 18,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 16,
				"defense": 10
			},
			"properties": {},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 16,
			"name": {
				"en_US": "Rocksplitter",
				"de_DE": "Rocksplitter<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "开山镐",
				"ja_JP": "ロックスプリッター<<A<<[CHANGED 2017/08/03]",
				"langUid": 1456,
				"ko_KR": "돌망치"
			},
			"description": {
				"en_US": "A robust tool, often used to dig through mountain and monster alike.",
				"de_DE": "Robustes Werkzeug, dass sich durch Gestein und Monster zugleich schlagen kann.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一把粗糙的工具，通常用来凿开大山或怪物。",
				"ja_JP": "山もモンスターも同様に貫通して掘ることのできる頑丈な道具。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1457,
				"ko_KR": "산이나 괴물을 뚫는 데 종종 사용되는 튼튼한 장비입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 5970,
			"level": 21,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 22,
				"defense": 12
			},
			"properties": {
				"BREAK_DMG": 1.2
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 33,
			"name": {
				"en_US": "Silver Hawk",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "银鹰",
				"ja_JP": "シルバーホーク<<A<<[CHANGED 2017/08/03]",
				"langUid": 1681,
				"ko_KR": "은색 매"
			},
			"description": {
				"en_US": "A shining weapon that was once even used to battle among the stars.",
				"de_DE": "Eine glänzende Waffe die einst sogar zum Kampf in den Sternen benutzt wurde.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一种闪闪发光的武器，曾经一度用在星际战争中。",
				"ja_JP": "星間戦争でも使われたことがあるという、光り輝く武器。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1682,
				"ko_KR": "별들의 전쟁에 사용되기도 한 빛나는 무기입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 60300,
			"level": 47,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 82,
				"focus": 31
			},
			"properties": {
				"AIMING_MOVEMENT": 0.85,
				"KNOCKBACK": 1.35,
				"RANGED_DMG": 1.2
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 4,
			"name": {
				"en_US": "Cooling Veil",
				"de_DE": "Cooling Veil<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "冰凉面纱",
				"ja_JP": "クーリングベール<<A<<[CHANGED 2017/08/03]",
				"langUid": 1745,
				"ko_KR": "냉각 베일"
			},
			"description": {
				"en_US": "A headscarf drenched in cooling liquid that protects against heat and sunburns.",
				"de_DE": "In kühlende Flüssigkeit getränktes Kopftuch, welches vor Hitze und Sonnenbrand schützt.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一条浸透冷却液的头巾，用于防止过热和晒伤。",
				"ja_JP": "冷却効果のある液体のしみ込んだハンカチで、熱や日焼けから身を守ってくれる。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1746,
				"ko_KR": "차가운 액체로 적셔져 열에 타는 것을 방지하는 머리에 두르는 스카프입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 1710,
			"level": 11,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1.25,
					1,
					1,
					1
				],
				"hp": 31,
				"defense": 6,
				"focus": 4
			},
			"properties": {},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Longears",
				"de_DE": "Longears<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "长耳朵",
				"ja_JP": "ロングイヤー<<A<<[CHANGED 2017/08/03]",
				"langUid": 1747,
				"ko_KR": "롱이어"
			},
			"description": {
				"en_US": "A headband with long, fluffy ears that resemble those of a bunny. ",
				"de_DE": "Ein Haarreif mit langen, puschligen Ohren, ähnlich denen eines Hase.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "带着像兔子那样毛茸茸长耳朵的发箍。",
				"ja_JP": "うさぎのような、長くてふわふわの耳のついたはち巻き。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1748,
				"ko_KR": "마치 토끼같이 긴 귀가 달린 머리띠입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 6310,
			"level": 21,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 45,
				"defense": 2,
				"focus": 26
			},
			"properties": {
				"AIM_SPEED": 1.25,
				"DASH_INVINC": 1.25
			},
			"order": 12,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Iron Goggles",
				"de_DE": "Iron Goggles<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "铁制护目镜",
				"ja_JP": "アイアンゴーグル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1415,
				"ko_KR": "철 고글"
			},
			"description": {
				"en_US": "Very robust goggles. Frames are iron. Glasses are glass. ",
				"de_DE": "Sehr stabile Schutzbrille. Gestell ist aus Eisen. Gläser sind aus Glas.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "粗野的护目镜。框架是铁的。镜片是玻璃的。",
				"ja_JP": "非常に頑丈なゴーグル。フレーム部は鉄製。ガラス部は…ガラス製。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1416,
				"ko_KR": "매우 튼튼한 고글. 테는 철로 만들어졌습니다. 안경알은 유리죠."
			},
			"type": "EQUIP",
			"cost": 4700,
			"level": 18,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"defense": 2,
				"focus": 24
			},
			"properties": {},
			"rarity": 1,
			"order": 9,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Furry Cap",
				"de_DE": "Furry Cap<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "毛绒帽子",
				"ja_JP": "ふさふさのキャップ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1749,
				"ko_KR": "털모자"
			},
			"description": {
				"en_US": "The ideal headgear for cold climates. Very hard to keep clean though.",
				"de_DE": "Die ideale Kopfbedeckung in der Kälte. Ist allerdings sehr schwer sauber zu halten.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "寒冷气候中的理想头饰。很难清理。",
				"ja_JP": "寒冷気候に最適なかぶり物。きれいに保つのは大変だけど。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1750,
				"ko_KR": "추운 기후에 적합한 모자입니다. 하지만 깨끗하게 관리하기가 어렵습니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 5080,
			"level": 19,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1.25,
					1,
					1
				],
				"hp": 85,
				"defense": 11,
				"focus": 9
			},
			"properties": {},
			"order": 10,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Icewalkers",
				"de_DE": "Icewalkers<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "雪地靴",
				"ja_JP": "アイスウォーカー<<A<<[CHANGED 2017/08/03]",
				"langUid": 1715,
				"ko_KR": "아이스워커"
			},
			"description": {
				"en_US": "High boots with spiked soles. Useful on slippery ground.",
				"de_DE": "Hohe Stiefel mit stachligen Sohlen. Nützlich auf rutschigem Boden.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "鞋底带有尖刺的高筒靴。在滑溜溜的地面上行走非常实用。",
				"ja_JP": "靴底にとげの付いた長靴。よく滑る地面を歩くときに役立つ。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1716,
				"ko_KR": "밑창에 스파이크가 있는 하이 부츠입니다. 미끄러운 바닥에서 신기 유용합니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 5110,
			"level": 19,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1.1,
					1,
					1
				],
				"hp": 155,
				"defense": 9,
				"focus": 4
			},
			"properties": {
				"STUN_THRESHOLD": 1.05
			},
			"order": 9,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Iron Boots",
				"de_DE": "Iron Boots<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "铁靴",
				"ja_JP": "アイアンブーツ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1522,
				"ko_KR": "철 부츠"
			},
			"description": {
				"en_US": "Well-crafted footgear that ensures both mobility and safe feet.",
				"de_DE": "Gut gefertigter Fußschutz, der sowohl Beweglichkeit als auch sichere Füße garantiert.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "精心制作的鞋袜，以确保移动性和脚部安全。",
				"ja_JP": "素早さと足の安全を約束する、精巧に作られた足装備。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1523,
				"ko_KR": "기동성과 안전성이 보장된 잘 만들어진 신발입니다."
			},
			"type": "EQUIP",
			"cost": 4700,
			"level": 18,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 135,
				"defense": 4,
				"focus": 9
			},
			"properties": {},
			"rarity": 1,
			"order": 8,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Iron Mail",
				"de_DE": "Iron Mail<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "铁盔甲",
				"ja_JP": "アイアンメイル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1524,
				"ko_KR": "철 갑옷"
			},
			"description": {
				"en_US": "Very reliable body armor. Also the standard equipment of an elite delivery service.",
				"de_DE": "Sehr zuverlässiger Körperpanzer. Dient außerdem als Standardrüstung von Elite-Boten.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "非常可靠的身体盔甲。也是一名精英送货员的标配。",
				"ja_JP": "高い安定性を誇るよろい。一流デリバリーサービスの標準装備でもある。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1525,
				"ko_KR": "믿을만한 갑옷입니다. 엘리트 배송 서비스의 기본 장비이기도 합니다."
			},
			"type": "EQUIP",
			"cost": 4800,
			"level": 18,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 190,
				"defense": 7
			},
			"properties": {},
			"rarity": 1,
			"order": 9,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Hardrock Plate",
				"de_DE": "Hardrock Plate<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "硬岩板甲",
				"ja_JP": "ハードロックプレート<<A<<[CHANGED 2017/08/03]",
				"langUid": 1791,
				"ko_KR": "경암 판금 갑옷"
			},
			"description": {
				"en_US": "Heavy plate made out of almost unbreakable rock. Emits distinctive sounds on hit.",
				"de_DE": "Schwerer Panzer aus fast unzerstörbarem Stein. Hat zudem einen unverkennbaren Klang.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "用几乎不会破碎的岩石制作而成重甲。敲击的时候会发出特殊的声音。",
				"ja_JP": "ほぼ破壊不可能な岩でできた重い装甲。攻撃を受けたときの音がとても特徴的。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1792,
				"ko_KR": "잘 부서지지 않는 경암으로 만들어진 무거운 판금 갑옷입니다. 타격 시 특유의 소리를 냅니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 5130,
			"level": 19,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 111,
				"defense": 22
			},
			"properties": {
				"STUN_THRESHOLD": 1.02,
				"DASH_INVINC": 0.75
			},
			"order": 10,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Spiky Jacket",
				"de_DE": "Spiky Jacket<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "尖刺夹克",
				"ja_JP": "スパイクジャケット<<A<<[CHANGED 2017/08/03]",
				"langUid": 1793,
				"ko_KR": "스파이크 재킷"
			},
			"description": {
				"en_US": "Made from needles and bug shells to create a natural protection. Be careful in crowds!",
				"de_DE": "Zum Schutz aus Nadeln und Käferpanzern hergestellt. Vorsicht in Menschenmengen!<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "用针和昆虫壳制作出的一件护体装备。在人群中行走要小心了！",
				"ja_JP": "針や虫の殻を使って作られた、自然の防具。人ごみに入るときは気を付けよう！<<A<<[CHANGED 2017/08/03]",
				"langUid": 1794,
				"ko_KR": "바늘과 벌레의 껍질로 자연스럽게 보호합니다. 주위에 사람이 많을 땐 조심하세요!"
			},
			"type": "EQUIP",
			"cost": 4230,
			"level": 17,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 96,
				"attack": 2,
				"defense": 13
			},
			"properties": {
				"SPIKE_DMG": 1.5
			},
			"rarity": 2,
			"order": 8,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Bubblebelt",
				"de_DE": "Bubblebelt<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "气泡带",
				"ja_JP": "バブルベルト<<A<<[CHANGED 2017/08/03]",
				"langUid": 1795,
				"ko_KR": "거품 벨트"
			},
			"description": {
				"en_US": "A mysterious belt that constantly covers the owner in protective bubbles.",
				"de_DE": "Dieser mysteriöse Gürtel umhüllt seinen Besitzer mit schützenden Blasen.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一条神秘的腰带，可以持续产生气泡将主人保护起来。",
				"ja_JP": "防御性のある泡でその所有者を常に包み込む、謎のベルト。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1796,
				"ko_KR": "보호용 거품으로 착용자를 지속해서 보호하는 수수께끼의 벨트입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 6380,
			"level": 21,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1.1,
					1,
					1,
					1
				],
				"hp": 246,
				"defense": 6
			},
			"properties": {
				"HP_REGEN": 1.07
			},
			"order": 11,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 77,
			"name": {
				"en_US": "Fluffy Fur",
				"de_DE": "Flauschiges Fell",
				"langUid": 253,
				"zh_CN": "蓬松皮毛",
				"ko_KR": "털 모피",
				"ja_JP": "ふわふわの毛皮"
			},
			"description": {
				"en_US": "People often burst in sheer joy when touching this soft fur.",
				"de_DE": "Viele platzen geradezu vor Freude, wenn sie dieses weiche Fell berühren.",
				"langUid": 254,
				"zh_CN": "让人无法抵抗摸它的愿望。",
				"ko_KR": "이 부드러운 모피를 만지면 기분이 좋아집니다.",
				"ja_JP": "この柔らかい毛皮を触った人は、喜びではしゃいでしまうことがある。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 150,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 78,
			"name": {
				"en_US": "Rock Beak",
				"de_DE": "Rock Beak",
				"langUid": 255,
				"zh_CN": "石喙",
				"ko_KR": "딱딱한 부리",
				"ja_JP": "岩の口ばし"
			},
			"description": {
				"en_US": "An absurdly hard beak. It can actually be molten into a rare type of metal.",
				"de_DE": "Ein extrem harter Schnabel der sogar ein in seltenes Metall geschmolzen werden kann.",
				"fr_FR": "undefined",
				"langUid": 519,
				"zh_CN": "一个极其坚硬的尖喙。可以融化成一种稀有金属。",
				"ko_KR": "말도 안 되게 딱딱한 부리입니다. 하지만 녹으면 희귀한 금속이 됩니다.",
				"ja_JP": "信じられないほど硬い口ばし。溶かせば、珍しい金属と混ぜ合わせることができる。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 350,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 79,
			"name": {
				"en_US": "Solid Bubble",
				"de_DE": "Solide Blase",
				"langUid": 257,
				"zh_CN": "固体气泡",
				"ko_KR": "단단한 거품",
				"ja_JP": "硬い泡"
			},
			"description": {
				"en_US": "Yes, this is a bubble. It simply won't pop and some people like that.",
				"de_DE": "Ja, das ist eine Blase. Sie will einfach nicht platzen und manche mögen das.",
				"langUid": 258,
				"zh_CN": "是的，这是一个气泡。因为它不会爆而深受部分人的喜爱。",
				"ko_KR": "네, 거품 맞습니다. 잘 터지지 않으며 몇몇은 그 단단함을 좋아합니다.",
				"ja_JP": "ただの泡。ただ割れることがないのでそれを好む人もいる。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 400,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 83,
			"name": {
				"en_US": "Dropped Mic",
				"de_DE": "Dropped Mic",
				"langUid": 259,
				"zh_CN": "摔麦",
				"ko_KR": "누가 떨어뜨린 마이크",
				"ja_JP": "落ちたマイク"
			},
			"description": {
				"en_US": "Someone dropped this mic hard. It's shattered and unusable.",
				"de_DE": "Jemand hat dieses Mic hart fallen lassen. Es ist völlig unbrauchbar.",
				"langUid": 260,
				"zh_CN": "有人狠狠地摔下了这个麦克风。它已经破碎了且无法继续使用。",
				"ko_KR": "누군가가 이 마이크를 세게 떨어뜨렸습니다. 산산조각이 나 쓸 수 없습니다.",
				"ja_JP": "誰かが落としてしまったマイク。粉々になってしまい使用不可能。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 1000,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 3,
			"name": {
				"en_US": "Spice Set",
				"de_DE": "Spice Set",
				"langUid": 261,
				"zh_CN": "香料套餐",
				"ko_KR": "향신료 세트",
				"ja_JP": "スパイスセット"
			},
			"description": {
				"en_US": "Mostly obtained from traders. Contains everything from black pepper to saffron.",
				"de_DE": "Erhältlich bei Händlern. Enthält alles von Pfeffer bis Safran.",
				"fr_FR": "undefined",
				"langUid": 459,
				"zh_CN": "大部分物品来自商人。从黑胡椒到藏红花等物品应有尽有。",
				"ko_KR": "상인으로부터 획득할 수 있습니다. 후추부터 사프란까지, 없는 게 없습니다.",
				"ja_JP": "主にトレーダーから入手することができる。黒コショウからサフランまでよりどりみどり。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 250,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 9,
			"name": {
				"en_US": "The End",
				"de_DE": "Das Ende",
				"langUid": 263,
				"zh_CN": "结束",
				"ko_KR": "끝",
				"ja_JP": "ジ・エンド"
			},
			"description": {
				"en_US": "It's the end. But patience will be rewarded.",
				"de_DE": "Dies ist das Ende. Aber Geduld wird belohnt werden.",
				"fr_FR": "undefined",
				"zh_CN": "结束了。但等待终有回报。",
				"langUid": 1194,
				"ko_KR": "끝입니다. 얻는 건 인내심밖에 없습니다.",
				"ja_JP": "これで終わり。だが忍耐は報われるだろう。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"order": 43,
			"name": {
				"en_US": "Echo Roll",
				"de_DE": "Echo Roll",
				"fr_FR": "undefined",
				"zh_CN": "回声卷",
				"ja_JP": "エコーロール",
				"ko_KR": "에코 롤",
				"langUid": 265
			},
			"description": {
				"en_US": "While eating it emits a strange echo mimicking chewing sounds.",
				"de_DE": "Wenn man es isst, erhallt ein Echo, welches Kaugeräusche imitiert.",
				"fr_FR": "undefined",
				"zh_CN": "吃的时候会发出咀嚼似地奇异回声。",
				"ja_JP": "食べるとそしゃく音を模した奇妙な反響音を放つ。",
				"ko_KR": "먹을 때 씹는 소리가 이상하게 울려 퍼집니다.",
				"langUid": 1286
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 2050,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 30,
			"stats": [
				"OVERHEAT-3"
			],
			"noTrack": false,
			"foodSprite": "KEBAB3"
		},
		{
			"order": 3,
			"name": {
				"en_US": "Broken Chakram",
				"de_DE": "Kaputtes Chakram",
				"langUid": 267,
				"zh_CN": "破碎的环刃",
				"ko_KR": "부서진 차크람",
				"ja_JP": "壊れたチャクラム"
			},
			"description": {
				"en_US": "Rusty and broken. This weapon is as useful as it looks. A true waste of metal.",
				"de_DE": "Verrostet und kaputt. Sieht so nützlich aus wie es ist. Reinste Metallverschwendung.",
				"fr_FR": "undefined",
				"langUid": 503,
				"zh_CN": "已经损坏而且锈蚀严重。跟外表看上去一样毫无作用。简直是浪费材料。",
				"ko_KR": "낡고 부서졌습니다. 보는 것만큼 유용합니다. 진정한 금속의 낭비죠.",
				"ja_JP": "ぼろぼろに壊れている。見た目通りの価値を持つ武器。ただの金属の無駄遣いだ。"
			},
			"type": "EQUIP",
			"rarity": 0,
			"cost": 0,
			"level": 1,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 2
			},
			"properties": {},
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 10,
			"name": {
				"en_US": "-Disc of UNUSED",
				"de_DE": "",
				"langUid": 269,
				"zh_CN": "-无用的光盘",
				"ko_KR": "-미사용 디스크",
				"ja_JP": "-未使用のディスク"
			},
			"description": {
				"en_US": "IS NOT USED ANYMORE",
				"de_DE": "",
				"fr_FR": "undefined",
				"zh_CN": "不能再用了",
				"langUid": 1195,
				"ko_KR": "이제 사용되지 않습니다",
				"ja_JP": "もう使われない。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"order": 11,
			"name": {
				"en_US": "Disc of Insight",
				"de_DE": "Erkenntnisscheibe",
				"langUid": 271,
				"zh_CN": "洞察磁盘",
				"ko_KR": "통찰의 디스크",
				"ja_JP": "洞察のディスク"
			},
			"description": {
				"en_US": "Grants insight into the mysteries of the world.",
				"de_DE": "Gewährt Einblicke in die Mysterien der Welt.",
				"fr_FR": "undefined",
				"langUid": 425,
				"zh_CN": "赋予探寻世界奥秘的洞察力。",
				"ko_KR": "세상의 수수께끼에 통찰력을 부여합니다.",
				"ja_JP": "世界の謎に対する洞察力を与えてくれる。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 13,
			"name": {
				"en_US": "Disc of Treasure",
				"de_DE": "Schatzscheibe",
				"langUid": 273,
				"zh_CN": "珍宝光盘",
				"ko_KR": "보물의 디스크",
				"ja_JP": "秘宝のディスク"
			},
			"description": {
				"en_US": "An old artifact used to catch a fleeting glimpse of a vast treasure.",
				"de_DE": "Ein altes Artefakt, gewährt Einblick in die Truhenlage.",
				"langUid": 274,
				"zh_CN": "一件古老的器物，用以一瞥巨大宝藏。",
				"ko_KR": "놓쳤던 것이나 다양한 보물을 찾게 해주는 옛 가공품입니다.",
				"ja_JP": "莫大な秘宝の姿をかいま見ることができる、古いアーティファクト。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 4,
			"name": {
				"en_US": "Broken Shield",
				"de_DE": "Brüchiger Schild",
				"langUid": 275,
				"zh_CN": "破损的盾",
				"ko_KR": "부서진 방패",
				"ja_JP": "壊れた盾"
			},
			"description": {
				"en_US": "Another example of a useless piece of equipment.",
				"de_DE": "Ein weiteres Beispiel für nutzloses Equipement.",
				"fr_FR": "undefined",
				"langUid": 625,
				"zh_CN": "又一件无用的装备。",
				"ko_KR": "또 하나의 쓸모없는 장비입니다.",
				"ja_JP": "これもまた、使えない装備の一例だ。"
			},
			"type": "EQUIP",
			"rarity": 0,
			"cost": 0,
			"level": 1,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"defense": 2
			},
			"properties": {},
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 18,
			"name": {
				"en_US": "Autumn Ingredients",
				"de_DE": "Autumn Zutaten",
				"langUid": 277,
				"zh_CN": "秋色食材",
				"ko_KR": "가을 재료",
				"ja_JP": "オータムの食料"
			},
			"description": {
				"en_US": "A package of freshly picked ingredients from Autumn Rise for an important business lunch.",
				"de_DE": "Ein Lunchpaket mit ausgewählten Zutaten aus Autumn Rise.",
				"langUid": 278,
				"zh_CN": "从秋色山野获取的为一次重要的商务午餐所准备的新鲜食材。",
				"ko_KR": "중요한 사업상 점심으로 먹는 가을의 부상에서 엄선한 재료입니다.",
				"ja_JP": "大事な取引相手とのランチ会議に。オータムライズで採集された新鮮な食糧。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 81,
			"name": {
				"en_US": "Frosted Carrot",
				"de_DE": "Gefrorene Karotte",
				"langUid": 279,
				"zh_CN": "结霜的胡萝卜",
				"ko_KR": "언 당근",
				"ja_JP": "冷凍ニンジン"
			},
			"description": {
				"en_US": "A carrot preserved with a thin coating of ice. It's full of precious vitamins!",
				"de_DE": "Eine Karotte mit dünner Eisschicht überzogen. Kalt und vitaminreich!",
				"langUid": 280,
				"zh_CN": "带着一层薄冰的胡萝卜。充满了丰富的营养！",
				"ko_KR": "얇은 얼음 코팅으로 보존된 당근. 훌륭한 비타민으로 가득합니다!",
				"ja_JP": "薄い氷で保存されたニンジン。ビタミンたっぷり！"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 650,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 82,
			"name": {
				"en_US": "Perforated Tophat",
				"de_DE": "Kaputter Zylinder",
				"langUid": 281,
				"zh_CN": "穿孔的高脚帽",
				"ko_KR": "구멍 난 요술 모자",
				"ja_JP": "穴あきシルクハット"
			},
			"description": {
				"en_US": "A really fancy type of hat. Sadly this hasn't protected it from some vicious holes.",
				"de_DE": "Ein wirklich hipper Hut. Mit zahlreichen Löchern.",
				"langUid": 282,
				"zh_CN": "一顶帅气的帽子。可惜帅并不能保护它免受穿孔威胁。",
				"ko_KR": "매우 특이한 모자입니다. 슬프게도 이 구멍이 생기는 건 막을 수 없었습니다.",
				"ja_JP": "とてもオシャレな帽子。悲しいことに、穴が開くことは避けられなかったようだ。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 1700,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 80,
			"name": {
				"en_US": "Diabolic Horns",
				"de_DE": "Teuflische Hörner",
				"langUid": 283,
				"zh_CN": "恶魔角",
				"ko_KR": "악마의 뿔",
				"ja_JP": "悪魔の角"
			},
			"description": {
				"en_US": "Long, slightly curved horns, made from shiny metal. They also have a distinct smell.",
				"de_DE": "Lange, leicht gekrümmte Hörner aus Metall. Müffeln.",
				"fr_FR": "undefined",
				"langUid": 424,
				"zh_CN": "长且略微弯曲的角，由闪亮的金属制成。上面还有着独特的味道。",
				"ko_KR": "빛나는 금속으로 만들어진, 길고 약간 휜 뿔입니다. 특유의 냄새가 납니다.",
				"ja_JP": "長く少し弓なりの、光り輝く金属でできた角。特徴的なにおいを放つ。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 500,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 23,
			"name": {
				"en_US": "Captured Bunny",
				"de_DE": "Gefangener Hase",
				"langUid": 285,
				"zh_CN": "捕获的兔子",
				"ko_KR": "갇힌 토끼",
				"ja_JP": "捕獲したウサギ"
			},
			"description": {
				"en_US": "The legendary bunny captured in what looks like a ball-shaped capture device.",
				"de_DE": "Der legendäre Hase gefangen in einer ball-förmigen Gerätschaft.",
				"langUid": 286,
				"zh_CN": "传说中的这只兔子被一个看起来像球一样的捕获设备抓住了。",
				"ko_KR": "공처럼 생긴 포획 장치에 갇힌 전설의 토끼입니다.",
				"ja_JP": "ボールの形をした捕獲装置に入った、捕獲された伝説のウサギ。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 46,
			"name": {
				"en_US": "Disciple Gloves",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "门徒手套",
				"ja_JP": "ディサイプルグローブ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1683,
				"ko_KR": "제자의 장갑"
			},
			"description": {
				"en_US": "Scarcely used gloves belonging to a young martial artist, learning an ancient art.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "这双很少被使用过的手套属于一名正在学习古武术的年轻武斗家。",
				"ja_JP": "いにしえの武道を学ぶ、若き武闘家が所有するあまり使われていない手袋。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1684,
				"ko_KR": "고대의 기술을 배우는 젊은 무술인의 거의 사용되지 않은 장갑입니다."
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 20,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": -100,
				"attack": 5,
				"defense": 15,
				"focus": 20
			},
			"properties": {
				"PERFECT_GUARD_WINDOW": 1.25
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 24,
			"name": {
				"en_US": "Capture Device",
				"de_DE": "Fanggerät",
				"langUid": 289,
				"zh_CN": "捕获设备",
				"ko_KR": "포획 장치",
				"ja_JP": "捕獲装置"
			},
			"description": {
				"en_US": "A roundish-shaped device. It can absorb the soul of defeated enemies.",
				"de_DE": "Eine rundliches Gerät. Es kann die Seelen besiegter Gegner absorbieren.",
				"langUid": 290,
				"zh_CN": "一个圆形的装置。可以用来吸收被打败后的敌人灵魂。",
				"ko_KR": "둥근 모양의 포획 장치입니다. 처치한 적의 영혼을 빨아들일 수 있습니다.",
				"ja_JP": "球状の装置。倒した敵の魂を吸収することができる。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 32,
			"name": {
				"en_US": "Green Leaf Shade",
				"de_DE": "Grüne Laubform",
				"langUid": 291,
				"zh_CN": "绿叶证印",
				"ko_KR": "초록색 잎사귀 셰이드",
				"ja_JP": "グリーンリーフシェード"
			},
			"description": {
				"en_US": "Provides passage to \\c[3]Autumn Rise\\c[0].",
				"de_DE": "Gewährt Zugang nach \\c[3]Autumn Rise\\c[0].",
				"fr_FR": "undefined",
				"langUid": 598,
				"zh_CN": "开启通往\\c[3]秋色山野\\c[0]的道路。",
				"ko_KR": "\\c[3]가을의 부상\\c[0]으로 가는 길을 안내합니다.",
				"ja_JP": "\\c[3]オータムライズ\\c[0]への通行許可証。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 54,
			"name": {
				"en_US": "Faj'ro Key",
				"de_DE": "Faj'ro Schlüssel",
				"langUid": 293,
				"zh_CN": "法加罗钥匙",
				"ko_KR": "파즈로 열쇠",
				"ja_JP": "ファイロの鍵"
			},
			"description": {
				"en_US": "A regular key for Faj’ro Temple.",
				"de_DE": "Gewöhnlicher Faj’ro Tempel Schlüssel",
				"fr_FR": "undefined",
				"langUid": 1025,
				"zh_CN": "一把开启法加罗神庙的普通钥匙。",
				"ko_KR": "파즈로 사원의 기본 열쇠입니다.",
				"ja_JP": "ファイロ神殿で使う普通の鍵。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 55,
			"name": {
				"en_US": "Faj'ro Master Key",
				"de_DE": "Hauptschlüssel",
				"langUid": 295,
				"zh_CN": "法加罗主钥匙",
				"ko_KR": "파즈로 마스터 열쇠",
				"ja_JP": "ファイロのマスターキー"
			},
			"description": {
				"en_US": "Master Key of Heat Dungeon",
				"de_DE": "Hauptschlüssel des Hitze Dungeons",
				"fr_FR": "undefined",
				"zh_CN": "灼热地牢的主钥匙",
				"langUid": 1211,
				"ko_KR": "열기 던전의 마스터 열쇠입니다.",
				"ja_JP": "灼熱のダンジョンのマスターキー。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 34,
			"name": {
				"en_US": "Yellow Sand Shade",
				"de_DE": "Gelbe Sandform",
				"langUid": 297,
				"zh_CN": "黄沙证印",
				"ko_KR": "노란색 모래 셰이드",
				"ja_JP": "イエローサンドシェード"
			},
			"description": {
				"en_US": "Provides access to \\c[3]Faj'ro Temple\\c[0].",
				"de_DE": "Gewährt Zugang zum \\c[3]Faj'ro Tempel\\c[0].",
				"fr_FR": "undefined",
				"langUid": 649,
				"zh_CN": "开启\\c[3]法加罗神庙\\c[0]通往的道路。",
				"ko_KR": "\\c[3]파즈로 사원\\c[0]으로 가는 길을 안내합니다.",
				"ja_JP": "\\c[3]ファイロ神殿\\c[0]への通行許可証。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 40,
			"name": {
				"en_US": "Mine Pass",
				"de_DE": "Minenpass",
				"langUid": 299,
				"zh_CN": "矿井通行证",
				"ko_KR": "광산 통행증",
				"ja_JP": "鉱山の通行証"
			},
			"description": {
				"en_US": "The pass for \\c[3]Temple Mine\\c[0]. Acquired after extensive amounts of forced exposition.",
				"de_DE": "Der Pass für die \\c[3]Tempel Mine\\c[0]. Erhalten nach aufgezwungener Erkundung.",
				"fr_FR": "undefined",
				"langUid": 720,
				"zh_CN": "这是一张前往\\c[3]神庙矿井\\c[0]的通行证。",
				"ko_KR": "\\c[3]사원 광산\\c[0]으로 들어갈 수 있는 통행증입니다. 많은 설명을 억지로 들은 뒤 얻을 수 있습니다.",
				"ja_JP": "\\c[3]神殿鉱山\\c[0]の通行証。長々しい説明を半ば強制的に聞かされた後に入手できる。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 60,
			"name": {
				"en_US": "Neutral Stone",
				"de_DE": "Neutraler Stein",
				"langUid": 301,
				"zh_CN": "中性石",
				"ko_KR": "일반 스톤",
				"ja_JP": "ニュートラルストーン"
			},
			"description": {
				"en_US": "A conventionally shaped rock that emits neutrality. Might one day empower your circuit?",
				"de_DE": "Ein ganz gewöhnlicher Stein der völlig neutral zu sein scheint.",
				"fr_FR": "undefined",
				"langUid": 793,
				"zh_CN": "一块常规形状的岩石，非常普通。也许有一天可以让你的电路活络起来？",
				"ko_KR": "일반 속성을 뿜는 평범하게 생긴 돌입니다. 언젠가는 회로에 힘을 더해줄지도 모릅니다.",
				"ja_JP": "中性のエネルギーを放つ、普通の形をした岩。いずれあなたのサーキットの強化に役立つかも？"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 48,
			"name": {
				"en_US": "Hermit Repairkit",
				"de_DE": "Reparaturkit",
				"langUid": 303,
				"zh_CN": "隐士修理包",
				"ko_KR": "은둔자 수리 키트",
				"ja_JP": "隠者の修理キット"
			},
			"description": {
				"en_US": "A repair kit for the generator in the basement of the Hermit's House.",
				"de_DE": "Ein Reparaturset für den Generator im Keller der Eremitenhütte.",
				"fr_FR": "undefined",
				"langUid": 832,
				"zh_CN": "为隐士之家地下室的发电机准备的修理包。",
				"ko_KR": "은둔자의 집 지하에 있는 발전기의 수리 키트입니다.",
				"ja_JP": "隠者の家の地下にある暖房装置のための修理キット。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 41,
			"name": {
				"en_US": "Mine Key",
				"de_DE": "Minenschlüssel",
				"langUid": 305,
				"zh_CN": "矿井钥匙",
				"ko_KR": "광산 열쇠",
				"ja_JP": "鉱山の鍵"
			},
			"description": {
				"en_US": "A regular key for the Temple Mine.",
				"de_DE": "Gewöhnlicher Schlüssel für die Tempel Mine.",
				"fr_FR": "undefined",
				"langUid": 937,
				"zh_CN": "一把开启神庙矿井的普通钥匙",
				"ko_KR": "사원 광산의 기본 열쇠입니다.",
				"ja_JP": "神殿鉱山で使う普通の鍵。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 42,
			"name": {
				"en_US": "Mine Master Key",
				"de_DE": "Hauptschlüssel",
				"langUid": 307,
				"zh_CN": "矿井主钥匙",
				"ko_KR": "광산 마스터 열쇠",
				"ja_JP": "鉱山のマスターキー"
			},
			"description": {
				"en_US": "The master key for Temple Mine.",
				"de_DE": "Der Hauptschlüssel der Tempel Mine",
				"fr_FR": "undefined",
				"langUid": 366,
				"zh_CN": "开启神庙矿井的主钥匙。",
				"ko_KR": "사원 광산의 마스터 열쇠입니다.",
				"ja_JP": "神殿鉱山のマスターキー。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 3,
			"name": {
				"en_US": "Thief's Key",
				"de_DE": "Diebesschlüssel",
				"langUid": 309,
				"zh_CN": "窃贼钥匙",
				"ko_KR": "도둑의 열쇠",
				"ja_JP": "盗賊の鍵"
			},
			"description": {
				"en_US": "A rusty but astoundingly sturdy key. Opens bronze chests.",
				"de_DE": "Rostiger aber robuster Schlüssel. Öffnet Bronze Truhen.",
				"langUid": 310,
				"zh_CN": "一把锈蚀但异常坚固的钥匙。可以打开青铜箱子。",
				"ko_KR": "녹슬었지만 놀라울 정도로 단단한 열쇠입니다. 청동 상자를 열 수 있습니다.",
				"ja_JP": "さびているが驚くほど頑丈な鍵。青銅の宝箱を開けることができる。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 4,
			"name": {
				"en_US": "White Key",
				"de_DE": "Weißer Schlüssel",
				"langUid": 311,
				"zh_CN": "白银钥匙",
				"ko_KR": "흰색 열쇠",
				"ja_JP": "白い鍵"
			},
			"description": {
				"en_US": "A silver key so bright it appears white. Opens silver chests.",
				"de_DE": "Ein silberner Schlüssel, so hell, dass er weiß erscheint. Öffnet silberne Truhen.",
				"langUid": 312,
				"zh_CN": "一把银色的钥匙，闪亮到看似白色。可以打开白银箱子。",
				"ko_KR": "너무 눈부셔서 거의 흰색으로 보이는 은색 열쇠입니다. 은 상자를 열 수 있습니다.",
				"ja_JP": "その輝きのため白く見える銀色の鍵。銀の宝箱を開けることができる。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 5,
			"name": {
				"en_US": "Radiant Key",
				"de_DE": "Radiant Schlüssel",
				"langUid": 313,
				"zh_CN": "黄金钥匙",
				"ko_KR": "빛나는 열쇠",
				"ja_JP": "放射光の鍵"
			},
			"description": {
				"en_US": "A golden key emitting a mesmerizing pulse. Opens golden chests.",
				"de_DE": "Ein goldener Schlüssel von unfassbarer Schönheit. Öffnet goldene Truhen.",
				"langUid": 314,
				"zh_CN": "一把金色钥匙，散发着迷人的脉动。可以打开黄金箱子。",
				"ko_KR": "매력을 내뿜는 금색 열쇠입니다. 금 상자를 열 수 있습니다.",
				"ja_JP": "魅惑的な鼓動を発する金色の鍵。金の宝箱を開けることができる。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 8,
			"name": {
				"en_US": "Ye dirty 'ol cheater",
				"de_DE": "Du oller Cheater",
				"langUid": 315,
				"zh_CN": "作弊狗",
				"ko_KR": "이 더러운 사기꾼",
				"ja_JP": "薄汚いチートやろうめ"
			},
			"description": {
				"en_US": "You can't have that.",
				"de_DE": "Das kannste garnit haben.",
				"fr_FR": "undefined",
				"zh_CN": "不给你！",
				"langUid": 1196,
				"ko_KR": "당신은 그걸 가질 수 없어.",
				"ja_JP": "何でこれを持ってるんだ？"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"order": 27,
			"name": {
				"en_US": "Vermillion Jewel",
				"de_DE": "Vermillion Juwel",
				"fr_FR": "undefined",
				"zh_CN": "朱红色宝石",
				"ja_JP": "ヴァーミリオンジュエル",
				"ko_KR": "붉은 보석",
				"langUid": 317
			},
			"description": {
				"en_US": "A spherical jewel, shifting smoothly between orange and red colors.",
				"de_DE": "Ein spherisches Juwel, dessen Farbe butterweich zwischen Orange und Rot wechselt. ",
				"fr_FR": "undefined",
				"zh_CN": "一颗球状宝石，颜色在橘色和红色之间缓缓变换。",
				"ja_JP": "オレンジ色と赤色の間でゆっくりとその色を変化させる球状の宝石。",
				"ko_KR": "주황색과 빨간색이 보이는 둥근 보석입니다.",
				"langUid": 1098
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 30,
			"name": {
				"en_US": "Bug Shell",
				"de_DE": "Käferschale",
				"langUid": 319,
				"zh_CN": "昆虫贝壳",
				"ko_KR": "벌레의 껍질",
				"ja_JP": "バグシェル"
			},
			"description": {
				"en_US": "A shell shaped like a bug. It emits a blue aura, pulsating almost like a heartbeat.",
				"de_DE": "Eine Schale in Form eines Käfers. Pulsiert wie ein Herz.",
				"fr_FR": "undefined",
				"langUid": 341,
				"zh_CN": "一个长得像昆虫的贝壳。发出心跳般的蓝色脉动。",
				"ko_KR": "벌레 모양의 껍질입니다. 심장 박동처럼 고동치며 푸른 아우라를 내뿜습니다.",
				"ja_JP": "虫の形をした貝殻。青いオーラを放っており、心臓の鼓動のように脈打っている。"
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 32,
			"name": {
				"en_US": "Blue Orb",
				"de_DE": "Blauer Orb",
				"langUid": 321,
				"zh_CN": "蓝球",
				"ko_KR": "푸른 구슬",
				"ja_JP": "ブルーオーブ"
			},
			"description": {
				"en_US": "You can hear something buzzing inside.",
				"de_DE": "Du kannst im Inneren etwas summen hören.",
				"fr_FR": "undefined",
				"langUid": 342,
				"zh_CN": "球体内部嗡嗡作响。",
				"ko_KR": "안에서 윙윙거리는 소리를 들을 수 있습니다.",
				"ja_JP": "中で何かがブーンと音を立てているのが聞こえる。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 200,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 11,
			"name": {
				"en_US": "Proper Tophat",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "高贵高脚帽",
				"ja_JP": "まともなシルクハット<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "꿰맨 요술 모자",
				"langUid": 1751
			},
			"description": {
				"en_US": "An expertly patched tophat. It's not uniquely impressive but at least without holes.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "巧妙修补过的高脚帽，虽然并不很好看，但至少没有洞了。",
				"ja_JP": "上手に継ぎを当てたシルクハット。別段素晴らしいという訳ではないが、少なくとも穴は開いていない。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "능숙하게 천을 덧댄 요술 모자입니다. 특별히 인상 깊지는 않지만, 적어도 구멍은 없습니다.",
				"langUid": 1752
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 7500,
			"level": 20,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"defense": 7,
				"focus": 23
			},
			"properties": {
				"SP_REGEN": 1.15,
				"KNOCKBACK": 1.15
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 40,
			"name": {
				"en_US": "- Devillish Tophat NOEZ",
				"de_DE": "- Teufelszylinder NOEZ",
				"langUid": 327,
				"zh_CN": "-邪恶高脚帽NOEZ",
				"ko_KR": "- 악마의 요술 모자 NOEZ"
			},
			"description": {
				"en_US": "Decorated with goat horns and a pink flower. It really shows that you mean business!",
				"de_DE": "Dekoriert mit Ziegenhörnern und einer pinken Blume.",
				"fr_FR": "undefined",
				"zh_CN": "用羊角和粉色的花瓣装饰，带着它别人就知道你可不是闹着玩的！",
				"langUid": 1236,
				"ko_KR": "염소의 뿔과 분홍색 꽃으로 꾸며졌습니다. 당신이 진지하다는 걸 보여줍니다!",
				"ja_JP": "ヤギの角とピンク色の花で飾りつけされている。君が本気だということを見せつけろ！"
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 0,
			"level": 1,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				]
			},
			"properties": {
				"STUN_THRESHOLD": 1.02,
				"KNOCKBACK": 1.15
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"order": 31,
			"name": {
				"en_US": "Metal Gears",
				"de_DE": "Zahnräder",
				"langUid": 330,
				"zh_CN": "合金装备",
				"ko_KR": "금속 장비",
				"ja_JP": "メタルギア"
			},
			"description": {
				"en_US": "Just gears made out of metal, yepp.",
				"de_DE": "Einfach nur Räder aus Zähn... äh... Metall. Japp.",
				"fr_FR": "undefined",
				"langUid": 340,
				"zh_CN": "只是用合金制成的装备，嗯。",
				"ko_KR": "말 그대로 금속으로 만들어진 장비입니다.",
				"ja_JP": "金属でできた、ただの歯車。それだけ。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 11,
			"name": {
				"en_US": "Ancient Sandals",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "先祖凉鞋",
				"ja_JP": "エンシェントサンダル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1875,
				"ko_KR": "고대의 샌들"
			},
			"description": {
				"en_US": "Worn out sandals, probably of Ancient origin. Still emit some residual aura.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "穿着凉鞋，可能是先祖起源时期的。至今依然散发出遗留的光芒。",
				"ja_JP": "古代人のものだったかもしれない、履き古されたサンダル。残留オーラを未だに放っている。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1876,
				"ko_KR": "고대의 것으로 추정되는 낡은 샌들입니다. 아직 남아있는 아우라를 내뿜습니다."
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 25,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1.1,
					1.1,
					1.1,
					1.1
				],
				"hp": 182,
				"defense": 6,
				"focus": 16
			},
			"properties": {
				"OVERHEAT_REDUCTION": 1.2
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 33,
			"name": {
				"en_US": "Sweet Lemonjuice",
				"de_DE": "Süßer Zitronensaft",
				"fr_FR": "undefined",
				"zh_CN": "甜柠饮料",
				"ja_JP": "甘いレモンジュース",
				"ko_KR": "스위트 레몬주스",
				"langUid": 358
			},
			"description": {
				"en_US": "Still quite sour despite lots of sugar, but filled with precious vitamins.",
				"de_DE": "Trotz des Zuckers verdammt sauer. Immerhin voll mit Vitaminen!",
				"fr_FR": "undefined",
				"zh_CN": "加了很多糖还是很酸，但是起码富含维他命。",
				"ja_JP": "砂糖が大量に入っているがけっこう酸っぱい。貴重なビタミンが豊富。",
				"ko_KR": "설탕이 많이 들어갔지만 그래도 신, 훌륭한 비타민으로 가득한 주스입니다.",
				"langUid": 1142
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 200,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 30,
			"stats": [
				"COLD-RES-2"
			],
			"noTrack": false,
			"foodSprite": "LEMONADE"
		},
		{
			"order": 37,
			"name": {
				"en_US": "Hotsauce",
				"de_DE": "Hotsauce",
				"fr_FR": "undefined",
				"zh_CN": "辣酱",
				"ja_JP": "ホットソース",
				"ko_KR": "매운 소스",
				"langUid": 360
			},
			"description": {
				"en_US": "So hot, you will stop feeling cold for quite some time.",
				"de_DE": "So scharf, dass du für eine Weile nicht mehr frieren wirst.",
				"fr_FR": "undefined",
				"zh_CN": "超辣，吃了之后你很长一段时间都不会感觉冷了。",
				"ja_JP": "とても辛くて、しばらくの間寒さを感じなくなる。",
				"ko_KR": "너무 매워서 한동안 추위를 못 느낄지도 모릅니다.",
				"langUid": 1279
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 500,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 30,
			"stats": [
				"COLD-RES-3"
			],
			"noTrack": false,
			"foodSprite": "HOT_SAUCE"
		},
		{
			"order": 36,
			"name": {
				"en_US": "Vanilla Ice Cream",
				"de_DE": "Vanille Eiscreme",
				"fr_FR": "undefined",
				"zh_CN": "香草冰淇淋",
				"ja_JP": "バニラアイスクリーム",
				"ko_KR": "바닐라 아이스크림",
				"langUid": 362
			},
			"description": {
				"en_US": "The best flavor of ice cream, everyone knows that!",
				"de_DE": "Der beste Eisgeschmack überhaupt, das weiß doch jeder!",
				"fr_FR": "undefined",
				"zh_CN": "香草是最好吃的冰激淋口味，这是公认的！",
				"ja_JP": "アイスクリームの最高の味。みんなの常識だよね？",
				"ko_KR": "아이스크림 중 제일 잘 팔리는 맛입니다. 모두가 알죠!",
				"langUid": 1280
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 500,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 30,
			"stats": [
				"HEAT-RES-3"
			],
			"noTrack": false,
			"foodSprite": "ICE_CREAM_S"
		},
		{
			"order": 36,
			"name": {
				"en_US": "Holiday Hat",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "节日帽",
				"ja_JP": "ホリデーハット<<A<<[CHANGED 2017/08/03]",
				"langUid": 1911,
				"ko_KR": "할리데이 모자"
			},
			"description": {
				"en_US": "A special hat you got from \\c[3]Holiday Man\\c[0] for helping him.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一顶\\c[3]圣诞超人\\c[0]为了奖励帮助他的人而赠送的特别帽子。",
				"ja_JP": "\\c[3]ホリデーマン\\c[0]を手伝ったお礼に受け取った特別な帽子。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1912,
				"ko_KR": "\\c[3]할리데이 맨\\c[0]을 도와준 보답으로 받은 특별한 모자입니다."
			},
			"type": "EQUIP",
			"rarity": 4,
			"cost": 0,
			"level": 25,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 11,
				"defense": 13,
				"focus": 18
			},
			"properties": {
				"MONEY_PLUS": 1.1,
				"DROP_CHANCE": 1.1
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"order": 30,
			"name": {
				"en_US": "Holiday Present",
				"de_DE": "Wintergeschenk",
				"langUid": 371,
				"zh_CN": "节日礼物",
				"ko_KR": "할리데이 선물",
				"ja_JP": "ホリデープレゼント"
			},
			"description": {
				"en_US": "A present from \\c[3]Holiday Man\\c[0]. Give it to other players!",
				"de_DE": "Ein Geschenk vom \\c[3]Holiday Man\\c[0]. Gib es anderen Spielern!",
				"fr_FR": "undefined",
				"langUid": 372,
				"zh_CN": "一件来自\\c[3]圣诞超人\\c[0]的礼物。把它送给其他玩家吧！",
				"ko_KR": "\\c[3]할리데이 맨\\c[0]이 준 선물입니다. 다른 플레이어에게 나눠주세요!",
				"ja_JP": "\\c[3]ホリデーマン\\c[0]からのプレゼント。他のプレイヤーに渡そう！"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 31,
			"name": {
				"en_US": "First Scholar Pass",
				"de_DE": "Erste Gelehrte-Pass",
				"langUid": 386,
				"zh_CN": "第一学者通行证",
				"ko_KR": "최초의 학자들 통행증",
				"ja_JP": "ファーストスカラーの通行証"
			},
			"description": {
				"en_US": "Grants access to the guild village and First Scholars home in Autumn's Rise.",
				"de_DE": "Gewährt Zugang zum Gildendorf und dem Gebäude der First Scholars in Autumns Rise.",
				"fr_FR": "undefined",
				"langUid": 387,
				"zh_CN": "可以拜访秋色山野的公会村和第一学者之家了。",
				"ko_KR": "가을의 부상에 있는 길드 마을 및 최초의 학자들 본부에 들어갈 수 있는 통행증입니다.<<C<<Is guild village also in Autumn's Rise or in anywhere?<<A<<It is an area located in Autumn's Rise. It can be entered from there as well.",
				"ja_JP": "オータムライズにある、ファーストスカラーの本部とその近辺地域への通行許可証。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 15,
			"name": {
				"en_US": "Pure Autumn Cider",
				"de_DE": "Purer Autumn Cider",
				"langUid": 389,
				"zh_CN": "纯净的秋色苹果汁",
				"ko_KR": "퓨어 가을 사이다",
				"ja_JP": "ピュアオータムサイダー"
			},
			"description": {
				"en_US": "A liquid extracted from the fruits of the \\v[area.autumn-area.name]. Allegedly heals sick trees.",
				"de_DE": "Eine Flüssigkeit aus den Früchten von \\v[area.autumn-area.name]. Soll kranke Bäume heilen.",
				"fr_FR": "undefined",
				"langUid": 390,
				"zh_CN": "从\\v[area.autumn-area.name]果实中提取的液体。据说可以治愈生病的树。",
				"ko_KR": "\\v[area.autumn-area.name]으로부터 추출한 액체입니다. 들리는 바에 의하면 병든 나무를 치유한다고 합니다.",
				"ja_JP": "\\v[area.autumn-area.name]のフルーツから抽出した液体。病める木を治すことができるという。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 14,
			"name": {
				"en_US": "Geo-Data #3469",
				"de_DE": "Geo-Daten #3469",
				"langUid": 391,
				"zh_CN": "地理数据#3469",
				"ko_KR": "지리 데이터 #3469",
				"ja_JP": "地理データ #3469"
			},
			"description": {
				"en_US": "Geographical data collected by the explorer Tucos, stored on a small data storage.",
				"de_DE": "Daten, gesamelt vom Erkunder Tucos, gespeichert auf dieser Festplatte.",
				"fr_FR": "undefined",
				"langUid": 392,
				"zh_CN": "由探险者图克斯收集的地理数据，存储在一个小的数据存储器里。",
				"ko_KR": "탐험가 투코스가 수집한 지리 데이터로, 작은 저장 데이터에 보관되어 있습니다.",
				"ja_JP": "探検家テュコスが集めた地理に関するデータ。小さいデータストレージに保存されている。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 19,
			"name": {
				"en_US": "Autumn Probe",
				"de_DE": "Autumn Probe",
				"langUid": 393,
				"zh_CN": "秋色探针",
				"ko_KR": "가을 탐사기",
				"ja_JP": "オータムのプローブ"
			},
			"description": {
				"en_US": "A lost and found data probe installed by Henry the Researcher.",
				"de_DE": "Eine verlorene und nun gefundene Datenprobe, installiert von Henry dem Wissenschaftler.",
				"fr_FR": "undefined",
				"langUid": 595,
				"zh_CN": "一个失而复得的探针，由研究院亨利安装。",
				"ko_KR": "연구원 헨리가 설치한 분실 데이터 탐사기입니다.",
				"ja_JP": "研究者ヘンリーによって設置されたデータプローブ。失われた後、発見された。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 34,
			"name": {
				"en_US": "Tough Sand",
				"de_DE": "Starker Sand",
				"langUid": 395,
				"zh_CN": "坚硬的沙子",
				"ko_KR": "거친 모래",
				"ja_JP": "固い砂"
			},
			"description": {
				"en_US": "Special sand used to forge extremely sturdy glass.",
				"de_DE": "Spezieller Sand, der genutzt wird, um robustes Glas herzustellen.",
				"fr_FR": "undefined",
				"langUid": 396,
				"zh_CN": "一种特殊的沙子，可以用来锻造极其坚固的玻璃。",
				"ko_KR": "매우 단단한 유리를 만들기 위한 특별한 모래입니다.",
				"ja_JP": "非常に頑丈なガラスを作るのに使われる特別な砂。"
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 45,
			"name": {
				"en_US": "Glaring Rock",
				"de_DE": "Glänzender Stein",
				"langUid": 397,
				"zh_CN": "耀眼的岩石",
				"ko_KR": "눈부신 바위",
				"ja_JP": "輝く岩"
			},
			"description": {
				"en_US": "A rock that shimmers brightly when held against the sunlight.",
				"de_DE": "Ein Stein der grell schimmert, wenn man ihn gegen das Sonnenlicht hält.",
				"fr_FR": "undefined",
				"langUid": 400,
				"zh_CN": "一块岩石，在阳光下闪闪发亮。",
				"ko_KR": "햇빛을 받으면 밝게 빛나는 바위입니다.",
				"ja_JP": "太陽光にさらすとキラキラと光り輝く岩。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 36,
			"name": {
				"en_US": "Rainbow Gem",
				"de_DE": "Regenbogen Juwel",
				"langUid": 399,
				"zh_CN": "彩虹宝石",
				"ko_KR": "무지개 보석",
				"ja_JP": "レインボージェム"
			},
			"description": {
				"en_US": "This unique gem only forms at cliffsides during the rare rainfalls.",
				"de_DE": "Dieses seltene Juwel entsteht nur an den Klippen während der seltenen Regenfälle.",
				"fr_FR": "undefined",
				"langUid": 640,
				"zh_CN": "这种非常罕见的宝石只会在雨后的悬崖边上形成。",
				"ko_KR": "드문 우기 동안 절벽에서만 형성되는 독특한 보석입니다.",
				"ja_JP": "この珍しい宝石は崖際で、たまに降る雨の時にしか形を成さない。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 200,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 37,
			"name": {
				"en_US": "Vivid Water",
				"de_DE": "Belebendes Wasser",
				"langUid": 402,
				"zh_CN": "矿泉水",
				"ko_KR": "활력수",
				"ja_JP": "鮮やかな水"
			},
			"description": {
				"en_US": "Sweet water, rich in minerals. Found in the rivers of Maroon Valley.",
				"de_DE": "Süßes Wasser, reich an Mineralien. Kann in Maroon Valley gefunden werden.",
				"fr_FR": "undefined",
				"langUid": 403,
				"zh_CN": "水质甜美，含有丰富矿物质。来源于在褐红峡谷的河流。",
				"ko_KR": "미네랄이 가득 들어있는 달콤한 물입니다. 마룬 밸리 강가에서 발견됩니다.",
				"ja_JP": "ミネラル豊富な甘い水。マルーン谷の川で入手できる。"
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 38,
			"name": {
				"en_US": "Palmapple Seed",
				"de_DE": "Palmenapfelsamen",
				"langUid": 404,
				"zh_CN": "棕萝果",
				"ko_KR": "야자파인애플 씨앗",
				"ja_JP": "パインヤシの種"
			},
			"description": {
				"en_US": "A mix between a palm tree and a pineapple. It might sting when eaten.",
				"de_DE": "Eine Mischung aus Palemen und Ananas. Es könnte beim Essen ordentlich stechen.",
				"fr_FR": "undefined",
				"langUid": 405,
				"zh_CN": "棕榈树和菠萝树的混合品种。吃的时候可能会感到刺痛。",
				"ko_KR": "야자나무와 파인애플의 혼종입니다. 먹을 때 찔릴 수 있습니다.",
				"ja_JP": "ヤシの木とパイナップルの混合種。食べるとチクチクする。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 39,
			"name": {
				"en_US": "Cactone Fruit",
				"de_DE": "Kaktonen Frucht",
				"langUid": 406,
				"zh_CN": "仙人瓜果",
				"ko_KR": "수박선인장 열매",
				"ja_JP": "サボスイカの果実"
			},
			"description": {
				"en_US": "A hybrid between a water melon and a cactus. Both juicy and sweet!",
				"de_DE": "Eine hybride Frucht aus Wassermelone und Kaktus. Gleichzeiti saftig und süß!",
				"fr_FR": "undefined",
				"langUid": 434,
				"zh_CN": "西瓜和仙人掌的混合物。汁多超甜！",
				"ko_KR": "수박과 선인장의 혼종입니다. 물이 많고 달콤하죠!",
				"ja_JP": "サボテンとスイカのハイブリッド。どっちもみずみずしくて甘い！"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 41,
			"name": {
				"en_US": "Old Bones",
				"de_DE": "Alte Knochen",
				"langUid": 408,
				"zh_CN": "老骨",
				"ko_KR": "오래된 뼈",
				"ja_JP": "古い骨"
			},
			"description": {
				"en_US": "Fossilized bones with engraved symbols on them.",
				"de_DE": "Fossile Knochen mit eingravierten Symbolen darin.",
				"fr_FR": "undefined",
				"langUid": 439,
				"zh_CN": "雕有符号的化石骨。",
				"ko_KR": "문양이 새겨진 화석화된 뼈입니다.",
				"ja_JP": "表面に記号の掘られた化石。"
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 42,
			"name": {
				"en_US": "Helix Relic",
				"de_DE": "Helix Relikt",
				"langUid": 410,
				"zh_CN": "螺旋圣物",
				"ko_KR": "나선 유물",
				"ja_JP": "ヘリックスレリック"
			},
			"description": {
				"en_US": "This tremendous fossil is colored in shades of red and yellow.",
				"de_DE": "Dieses enorme Fossil ist in rote und gelbe Farben gehüllt.",
				"fr_FR": "undefined",
				"langUid": 411,
				"zh_CN": "这件巨大的化石上填充着红黄渐变色。",
				"ko_KR": "빨간색과 노란색 셰이드로 칠해진 거대한 화석입니다.",
				"ja_JP": "この大きな化石は赤と黄で色付けられている。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 43,
			"name": {
				"en_US": "Lucid Shard",
				"de_DE": "Klare Scherbe",
				"langUid": 412,
				"zh_CN": "透明碎片",
				"ko_KR": "빛나는 사금파리",
				"ja_JP": "透明なかけら"
			},
			"description": {
				"en_US": "It's almost transparent, making it appear as ordinary glass to most people.",
				"de_DE": "Es ist fast transparanet, weswegen viele Leute es mit Glas verwechseln.",
				"fr_FR": "undefined",
				"langUid": 413,
				"zh_CN": "几乎是透明的，对大多数人来说，它就是普通玻璃。",
				"ko_KR": "거의 투명해 일반 유리처럼 보입니다.",
				"ja_JP": "ほぼ透明なため、普通のガラスだと思ってしまう人がほとんど。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 1000,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 47,
			"name": {
				"en_US": "Everlasting Amber",
				"de_DE": "Ewiger Bernstein",
				"langUid": 414,
				"zh_CN": "永恒琥珀",
				"ko_KR": "영원한 호박",
				"ja_JP": "永遠の琥珀"
			},
			"description": {
				"en_US": "An gem so old that it precedes the time of the Ancients themselves.",
				"de_DE": "Ein Juwel, so alt, dass es sogar die Urväter überstanden hat.",
				"fr_FR": "undefined",
				"langUid": 415,
				"zh_CN": "一块经历了无数岁月的宝石，诞生于先祖时期以前。",
				"ko_KR": "너무 오래된 보석이라 스스로 고대의 시간을 앞서갑니다.",
				"ja_JP": "この古い宝石は古代人の時代より前から存在している。"
			},
			"type": "TRADE",
			"rarity": 3,
			"cost": 1000,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 17,
			"name": {
				"en_US": "Weird Hillkat Tech",
				"de_DE": "Hillkat Technologie",
				"langUid": 416,
				"zh_CN": "奇怪的地鼠科技产物",
				"ko_KR": "이상한 힐캣 기술",
				"ja_JP": "ヒルキャットの変な部品"
			},
			"description": {
				"en_US": "A mysterious piece of tech dropped by the \\c[3]Hillkat Bandleader\\c[0]. It might store data?",
				"de_DE": "Ein mysteriöses technisches Gerät, fallen gelassen vom \\c[3]Hillkat Anführer\\c[0].",
				"fr_FR": "undefined",
				"langUid": 417,
				"zh_CN": "由\\c[3]地鼠领队\\c[0]掉落的科技产物。它也许可以存储数据？",
				"ko_KR": "\\c[3]힐캣 밴드리더\\c[0]가 남긴 수수께끼의 기술입니다. 데이터를 저장할 수 있을지도 모릅니다.<<C<<\"dropped\" means \"remained\"?<<A<<\"dropped\" as in: the Hillkats owned it and dropped it when defeated",
				"ja_JP": "\\c[3]リーダー・ヒルキャット\\c[0]が落とした謎の部品。何かデータが入ってるかも？"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 44,
			"name": {
				"en_US": "Crystal Leek",
				"de_DE": "Kristall Lauch",
				"langUid": 427,
				"zh_CN": "晶葱",
				"ko_KR": "크리스털 리크",
				"ja_JP": "ケッショウニラ"
			},
			"description": {
				"en_US": "This salty crystal is shaped like a leek and is used in local cuisine.",
				"de_DE": "Dieser salzige Kristall hat die Form von Lauch. Schmackofatz!",
				"fr_FR": "undefined",
				"langUid": 440,
				"zh_CN": "形状像葱的盐晶，被广泛运用于当地烹饪。",
				"ko_KR": "이 소금기 있는 크리스털은 리크처럼 생겼으며 요리하는 데 쓰입니다.",
				"ja_JP": "この塩の結晶はニラのような形をしており、郷土料理で使われる。"
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 35,
			"name": {
				"en_US": "Arid Lumber",
				"de_DE": "Trockenes Holz",
				"langUid": 429,
				"zh_CN": "干燥的木材",
				"ko_KR": "건조한 목재",
				"ja_JP": "乾燥した材木"
			},
			"description": {
				"en_US": "A piece of wood so sturdy that it can survive without water for centuries.",
				"de_DE": "Ein Stück Holz so trocken, dass es Jahrhunderte ohne Wasser überstehen kann.",
				"fr_FR": "undefined",
				"langUid": 430,
				"zh_CN": "一块坚固的木头，它能在无水的情况下存活几个世纪。",
				"ko_KR": "아주 단단한 목재로, 몇 세기 동안 물 없이도 살 수 있습니다.",
				"ja_JP": "水なしで何世紀も生きることのできる木から取った、非常に頑丈な材木。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 46,
			"name": {
				"en_US": "Ancient Earth",
				"de_DE": "Alte Erde",
				"langUid": 431,
				"zh_CN": "先祖土壤",
				"ko_KR": "고대의 대지",
				"ja_JP": "古代の岩"
			},
			"description": {
				"en_US": "This inconspicuous rock holds the most durable ore on all of Shadoon.",
				"de_DE": "Dieser unscheinbare Stein beinhaltet das stärkste Metall von allen von ganz Shadoon",
				"fr_FR": "undefined",
				"langUid": 432,
				"zh_CN": "这块不起眼的岩石里包含了全沙德隆最耐久的矿石。",
				"ko_KR": "전체 샤둔 중 가장 단단한 광석을 지닌 눈에 띄지 않는 바위입니다.",
				"ja_JP": "地味なこの岩は、シャドゥーン上で最も耐久性のある鉱石を含んでいる。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 200,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 40,
			"name": {
				"en_US": "Maroon Chestnut",
				"de_DE": "Kastanienmarone",
				"langUid": 435,
				"zh_CN": "褐红栗子",
				"ko_KR": "마룬 밤",
				"ja_JP": "マルーンのチェスナッツ"
			},
			"description": {
				"en_US": "A rare chestnut found only close to the old maroon tree in Maroon Valley.",
				"de_DE": "Eine seltene Marone, die nur in der Nähe des Maronenbaums im Maronental vorkommt.",
				"fr_FR": "undefined",
				"langUid": 436,
				"zh_CN": "一颗罕见的栗子，只生长于褐红峡谷的老栗子树。",
				"ko_KR": "마룬 밸리에 있는 오래된 단풍나무 근처에서만 찾을 수 있는 희귀한 밤입니다.",
				"ja_JP": "マルーン谷のマルーンの木の近くでしか入手できない珍しいチェスナッツ。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 200,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 16,
			"name": {
				"en_US": "Autumn Salve",
				"de_DE": "Autumn Salbe",
				"langUid": 443,
				"zh_CN": "秋色药膏",
				"ko_KR": "가을의 연고",
				"ja_JP": "オータムの軟こう"
			},
			"description": {
				"en_US": "A highly concentrated healing ointment made from the fruits of the \\v[area.autumn-area.name].",
				"de_DE": "Hochkonzentrierte Salbe mit heildenden Kräften. Gemacht aus den Früchten.",
				"fr_FR": "undefined",
				"langUid": 444,
				"zh_CN": "由\\v[area.autumn-area.name]的果实制成的浓缩治疗药膏。",
				"ko_KR": "\\v[area.autumn-area.name]의 열매로 만들어진 고농축 치료 연고입니다.",
				"ja_JP": "\\v[area.autumn-area.name]のフルーツから作成した、高濃縮の治癒軟こう。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 5,
			"name": {
				"en_US": "Refined Metal",
				"de_DE": "Raffiniertes Metall",
				"langUid": 445,
				"zh_CN": "精炼金属",
				"ko_KR": "정제된 금속",
				"ja_JP": "再製メタル"
			},
			"description": {
				"en_US": "Polished yet still used metal parts. Created from old metal parts.",
				"de_DE": "Poliert aber immer noch stark benutztes Metallstück. Hergestellt aus alten Metallteilen.",
				"fr_FR": "undefined",
				"langUid": 453,
				"zh_CN": "由旧金属零件制成。但本质仍然是抛光后的旧零件。",
				"ko_KR": "광택이 나긴 하지만 그래도 금속 부품으로 사용됩니다. 오래된 금속 부품으로 만들어졌습니다.",
				"ja_JP": "磨き上げられた中古の金属パーツ。古い金属パーツから作られた。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 1000,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 6,
			"name": {
				"en_US": "Precious Metal",
				"de_DE": "Kostbares Metall",
				"langUid": 447,
				"zh_CN": "贵金属",
				"ko_KR": "훌륭한 금속",
				"ja_JP": "希少メタル"
			},
			"description": {
				"en_US": "High quality metal created by melting refined metal parts.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "由精炼金属再次提炼得到的高质量金属。",
				"ja_JP": "再製メタルを溶かして作った高品質の金属。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1384,
				"ko_KR": "녹은 정제 금속으로 만들어진 고급 금속입니다."
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 5000,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 7,
			"name": {
				"en_US": "Epic Metal",
				"de_DE": "Episches Metall",
				"fr_FR": "undefined",
				"zh_CN": "史诗金属",
				"ja_JP": "至高メタル",
				"langUid": 449,
				"ko_KR": "에픽 금속"
			},
			"description": {
				"en_US": "Metal popular among the Ancients. Extracted from precious metal parts.",
				"de_DE": "Metall, das bei den Urvätern beliebt war. Extrahiert kostbarem Metall.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "古代流行的金属。从贵金属零件中提炼而成。<<A<<[CHANGED 2017/07/07]",
				"ja_JP": "古代人の間で人気だった金属。貴重な金属から抽出して作られた。<<A<<[CHANGED 2017/08/03]",
				"langUid": 864,
				"ko_KR": "고대인들 사이에서 인기가 많았던 금속입니다. 훌륭한 금속에서 추출합니다."
			},
			"type": "TRADE",
			"rarity": 3,
			"cost": 1000,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 25,
			"name": {
				"en_US": "Gourmet Steak",
				"de_DE": "Gourmet Steak",
				"fr_FR": "undefined",
				"zh_CN": "国宴牛排",
				"ja_JP": "グルメステーキ",
				"ko_KR": "고급 스테이크",
				"langUid": 508
			},
			"description": {
				"en_US": "An outstanding steak with the perfect marinade.",
				"de_DE": "Ein herausragendes Steak mit der perfekten Marinade. Wohl bekommt's!",
				"fr_FR": "undefined",
				"zh_CN": "绝品的牛排，外焦里嫩，美味多汁。",
				"ja_JP": "完璧なマリネードで味付けされた、見事なステーキ。",
				"ko_KR": "완벽한 양념이 가미된 훌륭한 스테이크입니다.",
				"langUid": 1276
			},
			"type": "CONS",
			"rarity": 2,
			"cost": 1111,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 35,
			"stats": [
				"ATTACK-2",
				"DEFENSE-2",
				"CROSS_COUNTER-2"
			],
			"noTrack": false,
			"foodSprite": "STEAK"
		},
		{
			"order": 85,
			"name": {
				"en_US": "Poison Stinger",
				"de_DE": "Giftstachel",
				"langUid": 521,
				"zh_CN": "毒刺",
				"ko_KR": "독침",
				"ja_JP": "毒針"
			},
			"description": {
				"en_US": "A stinger from the tail of a \\v[combat.name.heat.scorpion]. Still full of poison.",
				"de_DE": "Ein Stachel vom Schwanz des \\v[combat.name.heat.scorpion]. Immer noch voll mit Gift.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"langUid": 612,
				"zh_CN": "\\v[combat.name.heat.scorpion]的尾刺。仍充满剧毒。",
				"ja_JP": "\\v[combat.name.heat.scorpion]の尾から入手できる毒針。未だに毒がある。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "\\v[combat.name.heat.scorpion] 꼬리에서 얻을 수 있는 침입니다. 아직 독이 남아있습니다."
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 450,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 87,
			"name": {
				"en_US": "Drill Stone",
				"de_DE": "Bohrstein",
				"langUid": 523,
				"zh_CN": "钻头石",
				"ko_KR": "드릴 스톤",
				"ja_JP": "ドリルストーン"
			},
			"description": {
				"en_US": "A incredibly sharp stone in the shape of a drilling head.",
				"de_DE": "Ein extrem scharfer Stein in Form eines Bohrkopfs.",
				"fr_FR": "undefined",
				"langUid": 613,
				"zh_CN": "长得像钻头的锋利岩石。",
				"ko_KR": "드릴의 앞부분처럼 생긴 매우 뾰족한 돌입니다.",
				"ja_JP": "ドリルのような形をした、非常に鋭い石。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 700,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 86,
			"name": {
				"en_US": "Dry Fin",
				"de_DE": "Trockene Flosse",
				"langUid": 525,
				"zh_CN": "干鳍",
				"ko_KR": "마른 지느러미",
				"ja_JP": "乾燥ヒレ"
			},
			"description": {
				"en_US": "Tail bone of a \\v[combat.name.heat.sandshark] which is more fragile than one might think.",
				"de_DE": "Schwanzflosse eines  \\v[combat.name.heat.sandshark]. Fragiler als man vielleicht denken mag.",
				"fr_FR": "undefined",
				"langUid": 614,
				"zh_CN": "\\v[combat.name.heat.sandshark]的尾骨，比人们想象得更加脆弱。",
				"ko_KR": "\\v[combat.name.heat.sandshark]의 꼬리뼈로, 생각보다 더 부서지기 쉽습니다.",
				"ja_JP": "\\v[combat.name.heat.sandshark]の尾骨。人々が考えるよりもろい。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 600,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 89,
			"name": {
				"en_US": "Squishy Teeth",
				"de_DE": "Matschiger Zahn",
				"langUid": 527,
				"zh_CN": "湿软的牙齿",
				"ko_KR": "물렁니",
				"ja_JP": "柔らかい歯"
			},
			"description": {
				"en_US": "A tooth that is soft to the touch. Truly uncanny.",
				"de_DE": "Ein Zahn der total weich beim Anfassen ist. Ziemlich unheimlich.",
				"fr_FR": "undefined",
				"langUid": 615,
				"zh_CN": "一颗摸起来特别柔软的牙齿。耐人寻味。",
				"ko_KR": "만지기 부드러운 이빨. 정말 기괴하군요.",
				"ja_JP": "柔らかい手触りの歯。とても気味が悪い。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 1050,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 90,
			"name": {
				"en_US": "Hardened Liver",
				"de_DE": "Gehärtete Leber<<A<<[CHANGED 2017/07/04]",
				"langUid": 529,
				"zh_CN": "硬肝",
				"ja_JP": "硬化レバー<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "단련된 간"
			},
			"description": {
				"en_US": "Despite it's name this liver is free of any strange substances. ",
				"de_DE": "Trotz des seltsamen Namens ist diese Leber frei von seltsamen Substanzen.",
				"fr_FR": "undefined",
				"langUid": 922,
				"zh_CN": "虽然名字不好听，但这片肝脏里并不包含任何奇怪的物质。",
				"ko_KR": "이 이름과는 달리 그 어떤 물질에도 영향을 받지 않습니다.",
				"ja_JP": "その名に反し、レバーの中には変な物質などは見当たらない。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 2100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 88,
			"name": {
				"en_US": "Phoenix Feather",
				"de_DE": "Phönix Feder",
				"langUid": 531,
				"zh_CN": "凤羽",
				"ko_KR": "불사조의 깃털",
				"ja_JP": "不死鳥の羽根"
			},
			"description": {
				"en_US": "Does not cure death despite popular belief. But it does look nice.",
				"de_DE": "Heilt zwar nicht wie allgemein angenommen den Tod, sieht aber immerhin hübsch aus.",
				"fr_FR": "undefined",
				"langUid": 642,
				"zh_CN": "与大众概念不同，这东西并不能让人死而复生。但是看起来不错。",
				"ko_KR": "많은 사람이 믿는 것처럼 죽은 것을 살리지는 못합니다. 하지만 멋있긴 하군요.",
				"ja_JP": "伝説のように死者を蘇らせることはできない。だが見た目はとてもいい。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 800,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 91,
			"name": {
				"en_US": "Butter Silk",
				"de_DE": "Butter Seide",
				"langUid": 533,
				"zh_CN": "黄油丝",
				"ko_KR": "버터 실크",
				"ja_JP": "バターシルク"
			},
			"description": {
				"en_US": "Yellow silk used to craft nigh-impenetrable garn.",
				"de_DE": "Gelbe Seide, genutzt um nahezu undurchdringlichen Garn zu erstellen.",
				"fr_FR": "undefined",
				"langUid": 643,
				"zh_CN": "黄色的丝绸，用以加工毫无防御能力的纱布。",
				"ko_KR": "끊어지지 않는 실의 재료로 쓰이는 노란색 실크입니다.<<C<<What does garn mean?<<A<<Probably was supposed to be \"yarn\"",
				"ja_JP": "黄色の生糸。これでつむいだ衣服は、ほぼ刃を受け付けない。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 1300,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 92,
			"name": {
				"en_US": "Jelly Extract",
				"de_DE": "Gelee Extrakt",
				"langUid": 535,
				"zh_CN": "果冻提取物",
				"ko_KR": "젤리 추출물",
				"ja_JP": "ジェリーのエキス"
			},
			"description": {
				"en_US": "No matter how you stretch it, the shape of a triangle persists.",
				"de_DE": "Egal wie du es streckst und dehnst, die dreieckige Form bleibt bestehen.",
				"fr_FR": "undefined",
				"langUid": 644,
				"zh_CN": "无论你如何延展，它总是维持着三角形的形状。",
				"ko_KR": "마음껏 늘려도 원래의 삼각형 모양을 유지합니다.",
				"ja_JP": "どれだけ伸ばしてもその三角形が崩れることはない。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 1150,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 93,
			"name": {
				"en_US": "Magma Residue",
				"de_DE": "Magma Rückstand",
				"langUid": 537,
				"zh_CN": "岩浆残余",
				"ko_KR": "마그마 잔여물",
				"ja_JP": "マグマの燃えカス"
			},
			"description": {
				"en_US": "Left by the extreme heat a \\v[combat.name.heat.heat-golem] creates when attacking.",
				"de_DE": "Bleibt zurück, wenn ein \\v[combat.name.heat.heat-golem] mit seinen \"hitzigen\" Angriffen daherkommt.",
				"fr_FR": "undefined",
				"langUid": 645,
				"zh_CN": "在\\v[combat.name.heat.heat-golem]攻击时产生极热后残留。",
				"ko_KR": "\\v[combat.name.heat.heat-golem]가 공격 시 만들어낸 극도의 열이 남은 것입니다.",
				"ja_JP": "\\v[combat.name.heat.heat-golem]が攻撃時に生み出す灼熱のマグマの残留物。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 2250,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 94,
			"name": {
				"en_US": "Laser Eyes",
				"de_DE": "Laser Augen",
				"langUid": 541,
				"zh_CN": "激光眼",
				"ko_KR": "레이저 아이즈",
				"ja_JP": "レーザーアイ"
			},
			"description": {
				"en_US": "A crystal ball that is said to grant the feat to shoot rays of light.",
				"de_DE": "Ein Kristallball, dem man nachsagt, die Fähigkeit zu verleihen, Laserstrahlen zu schießen.",
				"fr_FR": "undefined",
				"langUid": 646,
				"zh_CN": "一个水晶球，据说可以发射光线。",
				"ko_KR": "이 크리스털 공은 광선을 쏠 수 있는 능력을 부여합니다.",
				"ja_JP": "光線を放つ能力を得られると言われる水晶の玉。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 2400,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"name": {
				"en_US": "Steel Goggles",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "钢制护目镜",
				"ja_JP": "スティールゴーグル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1819,
				"ko_KR": "강철 고글"
			},
			"description": {
				"en_US": "Steel frames with reinforced glasses allow for an excellent protection of the eyes.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "钢制的框架，带有强化的镜片，可以极好地保护眼睛。",
				"ja_JP": "鋼のフレームと強化されたレンズにより、目をしっかり保護する。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1820,
				"ko_KR": "강철 테와 강화 유리가 눈을 아주 잘 보호해 줍니다."
			},
			"type": "EQUIP",
			"cost": 15850,
			"level": 27,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"defense": 3,
				"focus": 44
			},
			"properties": {},
			"rarity": 1,
			"order": 14,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 19,
			"name": {
				"en_US": "Steel Edge",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "钢之刃",
				"ja_JP": "スティールエッジ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1821,
				"ko_KR": "강철 검"
			},
			"description": {
				"en_US": "A powerful weapon crafted from a highly tempered alloy of iron and carbon.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一件强大的武器，由高碳钢锻造淬火而成。",
				"ja_JP": "よく鍛えられた鉄と炭素の合金を使ってちゅう造した強力な武器。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1822,
				"ko_KR": "철과 탄소의 고온합금으로 만든 강력한 무기입니다."
			},
			"type": "EQUIP",
			"rarity": 1,
			"cost": 15800,
			"level": 27,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 29,
				"defense": 17
			},
			"properties": {},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Steel Mail",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "钢制盔甲",
				"ja_JP": "スティールメイル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1823,
				"ko_KR": "강철 갑옷"
			},
			"description": {
				"en_US": "Fine body armor from reinforced steel. Sadly also popular with criminals.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一件由钢材制成的结实身体盔甲。可悲的是，据说罪犯常穿这个。",
				"ja_JP": "強化された鋼製の上質なよろい。悲しいことに、犯罪者も愛用している。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1824,
				"ko_KR": "정제된 강철의 괜찮은 갑옷입니다. 슬프게도 범죄자에게도 인기 있는 갑옷입니다."
			},
			"type": "EQUIP",
			"cost": 16100,
			"level": 27,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 340,
				"defense": 13
			},
			"properties": {},
			"rarity": 1,
			"order": 13,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Steel Boots",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "钢靴",
				"ja_JP": "スティールブーツ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1825,
				"ko_KR": "강철 부츠"
			},
			"description": {
				"en_US": "Very robust but still as light as possible. Even blisters are a rare occurrence.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "轻便稳健，穿上甚至很少会起水泡。",
				"ja_JP": "とても頑丈だが、極限まで軽量化してある。まめができることは珍しいほど。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1826,
				"ko_KR": "매우 튼튼하면서도 최대한 가볍게 만들어졌습니다. 물집도 잘 생기지 않습니다."
			},
			"type": "EQUIP",
			"cost": 15950,
			"level": 27,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 245,
				"defense": 8,
				"focus": 15
			},
			"properties": {},
			"rarity": 1,
			"order": 13,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Fin Cap",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "鳍帽",
				"ja_JP": "フィンキャップ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1913,
				"ko_KR": "지느러미 모자"
			},
			"description": {
				"en_US": "A huge fin attached to a cap. Helps to keep balance and grants a predatory aura.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一高脚帽子上装饰着一个巨大鳍。有助于保持平衡，并给人以掠食者的感觉。",
				"ja_JP": "巨大なヒレのついた帽子。バランスを保ち、また捕食動物のようなオーラを発してくれる。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1914,
				"ko_KR": "거대 지느러미가 달린 모자입니다. 균형을 잡아주며 포식자의 느낌을 낼 수 있습니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 9180,
			"level": 24,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 10,
				"defense": 6,
				"focus": 24
			},
			"properties": {
				"MELEE_DMG": 1.1
			},
			"order": 13,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Rapier Carrot",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "剑形胡萝卜",
				"ja_JP": "レイピアキャロット<<A<<[CHANGED 2017/08/03]",
				"langUid": 1915,
				"ko_KR": "가늘고 긴 당근"
			},
			"description": {
				"en_US": "A long, self-regrowing carrot. It's vitamins give life, the pointy end takes it away.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一株具有自我再生能力的长胡萝卜。维他命所给予的生命，都将被其尖端所掠夺。",
				"ja_JP": "自己成長する長いニンジン。そのビタミンは命を与え、その鋭い先端で与えた命を奪う。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1916,
				"ko_KR": "스스로 다시 자라는 긴 당근입니다. 비타민으로 생명을 부여하고, 뾰족한 끝으로 생명을 앗아갑니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 8870,
			"level": 24,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 88,
				"attack": 23,
				"focus": 8
			},
			"properties": {
				"CRITICAL_DMG": 1.25,
				"HP_REGEN": 1.03
			},
			"order": 18,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Dessert Vest",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "甜点背心",
				"ja_JP": "デザートベスト<<A<<[CHANGED 2017/08/03]",
				"langUid": 1917,
				"ko_KR": "디저트 의복"
			},
			"description": {
				"en_US": "A lacquered vest, often worn in dry regions. Was named for its sweet smell.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一种喷漆的背心，通常适合干燥地区的人们穿。因它甜美的气味而得名。",
				"ja_JP": "漆加工のされたベストで、乾燥地帯で愛用される。甘いデザートのような香りからその名がついた。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1918,
				"ko_KR": "종종 건조한 지역에서 입던 옻칠한 의복입니다. 이 의복의 달콤한 향에서 이름을 따왔습니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 9230,
			"level": 24,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1.1,
					1,
					1,
					1
				],
				"hp": 195,
				"defense": 15,
				"focus": 4
			},
			"properties": {
				"RANGED_DMG": 1.1,
				"DASH_INVINC": 1.1
			},
			"order": 12,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 12,
			"name": {
				"en_US": "Desert Sandals",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "沙漠凉鞋",
				"ja_JP": "デザートサンダル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1919,
				"ko_KR": "사막 샌들"
			},
			"description": {
				"en_US": "Can't be made without Sand, so they're obviously ideal for the desert.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "没有沙子造不出来这双鞋子，所有它们显然是沙漠的理想装备。",
				"ja_JP": "砂漠での着用に適しているサンダル。ビーチも砂漠も、同じようなものでしょ？<<A<<[CHANGED 2017/08/03]",
				"langUid": 1920,
				"ko_KR": "모래가 없이는 만들어질 수 없으니, 당연히 사막에서 유용하겠군요."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 9050,
			"level": 24,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 177,
				"defense": 4,
				"focus": 19
			},
			"properties": {
				"AIMING_MOVEMENT": 1.1,
				"AIM_SPEED": 1.1
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Nomadic Turban",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "浪人头巾",
				"ja_JP": "ノマディックターバン<<A<<[CHANGED 2017/08/03]",
				"langUid": 1897,
				"ko_KR": "유목민의 터번"
			},
			"description": {
				"en_US": "Typical headress of hunters in the desert who are said to be excellent marksmen.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "沙漠中猎人的典型头饰，这些人据说是杰出的射手。",
				"ja_JP": "優秀な射手と呼ばれる、砂漠のハンターたちが愛用するかぶりもの。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1898,
				"ko_KR": "명사수인 사막의 사냥꾼이 주로 착용하는 머리 장식입니다."
			},
			"type": "EQUIP",
			"cost": 20280,
			"level": 28,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"defense": 5,
				"focus": 44
			},
			"properties": {
				"AIMING_MOVEMENT": 1.1,
				"AIM_SPEED": 1.25
			},
			"rarity": 2,
			"order": 15,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Chilling Veil",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "冷却头巾",
				"ja_JP": "チリングベール<<A<<[CHANGED 2017/08/03]",
				"langUid": 1899,
				"ko_KR": "차가운 베일"
			},
			"description": {
				"en_US": "A fine headscarf blessed with cooling protection to withstand even scorching heat.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一件精致的头巾，具有冷却保护功能，可以抵御炎热的炙烤。",
				"ja_JP": "焼け付くような熱さでさえ耐えられる冷却防護の祝福が付与された上等なハンカチ。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1900,
				"ko_KR": "냉각 방어 덕분에 타는듯한 더위에서도 견딜 수 있는 머리에 두르는 스카프입니다."
			},
			"type": "EQUIP",
			"cost": 23300,
			"level": 30,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1.25,
					1,
					1,
					1
				],
				"hp": 88,
				"defense": 25,
				"focus": 20
			},
			"properties": {},
			"rarity": 2,
			"order": 16,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Shiny Glasses",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "发光眼镜",
				"ja_JP": "シャイングラス<<A<<[CHANGED 2017/08/03]",
				"langUid": 1901,
				"ko_KR": "빛나는 유리"
			},
			"description": {
				"en_US": "Polished glasses that give off a threatening glare. In need of regular readjustment.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "抛光后的眼镜，散发出胁迫的眩光。需要定期调整。",
				"ja_JP": "敵を脅すような眼光を放つことのできる優れたメガネ。使用前に再調整が必要。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1902,
				"ko_KR": "위협적인 빛을 발산하는 광택이 나는 유리입니다. 주기적으로 닦아주어야 합니다."
			},
			"type": "EQUIP",
			"cost": 25720,
			"level": 31,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"defense": 2,
				"focus": 57
			},
			"properties": {
				"CRITICAL_DMG": 1.25
			},
			"rarity": 2,
			"order": 17,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Magic Robe",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "魔法长袍",
				"ja_JP": "マジックローブ<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "마법의 로브",
				"langUid": 1887
			},
			"description": {
				"en_US": "Shad-crafted flowing robes, blessed by the Ancient power of the elements.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "沙德工艺制作的流动长袍，受先祖元素力量的祝福。",
				"ja_JP": "古代人のエレメントの祝福を受けた、シャッド製の優雅なローブ。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "속성의 고대의 힘이 깃든 샤드가 만든 로브입니다.",
				"langUid": 1888
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 23300,
			"level": 30,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1.1,
					1.1,
					1.1,
					1.1
				],
				"hp": 415,
				"defense": 8,
				"focus": 4
			},
			"properties": {
				"COND_HEALING": 1.15,
				"OVERHEAT_REDUCTION": 1.1
			},
			"order": 15,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Assassin Garb",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "刺客服装",
				"ja_JP": "アサシンガーブ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1889,
				"ko_KR": "암살 의복"
			},
			"description": {
				"en_US": "Light clothes for covert operations that are made to look strikingly inconspicuous.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "轻便的衣服，适用于隐蔽行动，十分非常不显眼。",
				"ja_JP": "着る者が驚くほど目立たなくなる、隠密行動に適した軽量の服装。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1890,
				"ko_KR": "거의 눈에 띄지 않게 만들어져 비밀 작전을 수행할 수 있는 가벼운 의복입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 20280,
			"level": 29,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 186,
				"defense": 14,
				"focus": 18
			},
			"properties": {
				"MELEE_DMG": 1.1,
				"CRITICAL_DMG": 1.25
			},
			"order": 14,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Crystal Plate",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "水晶板甲",
				"ja_JP": "クリスタルプレート<<A<<[CHANGED 2017/08/03]",
				"langUid": 1891,
				"ko_KR": "크리스털 판금 갑옷"
			},
			"description": {
				"en_US": "Heavy plate, reinforced with crystals and gems that actively defend against harm.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "重型板甲，用水晶和宝石强化，可以主动抵御侵害。",
				"ja_JP": "重い装甲で、敵からの攻撃を自動で防ぐ水晶と宝石により強化を施されている。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1892,
				"ko_KR": "크리스털과 보석으로 강화된 무거운 판금 갑옷입니다. 피해를 효과적으로 막아줍니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 25720,
			"level": 31,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 222,
				"defense": 36
			},
			"properties": {
				"DASH_INVINC": 0.75,
				"SPIKE_DMG": 1.5,
				"STUN_THRESHOLD": 1.02
			},
			"order": 16,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 14,
			"name": {
				"en_US": "Curly Slippers",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "卷卷拖鞋",
				"ja_JP": "カールスリッパ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1865,
				"ko_KR": "꼬부랑 슬리퍼"
			},
			"description": {
				"en_US": "Amazingly soft and comfortable footwear that somehow also manages to be curly.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "相当柔软并且舒适的鞋，但总是有卷曲着。",
				"ja_JP": "柔らかく履き心地のいいスリッパなのだが、どうしてかねじれている。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1866,
				"ko_KR": "앞부분이 안으로 말린 매우 부드럽고 편한 슬리퍼입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 17970,
			"level": 28,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 299,
				"defense": 5,
				"focus": 15
			},
			"properties": {
				"HP_REGEN": 1.03,
				"KNOCKBACK": 1.15
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 15,
			"name": {
				"en_US": "Lavish Anchors",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "奢华锚",
				"ja_JP": "豪勢なアンカー<<A<<[CHANGED 2017/08/03]",
				"langUid": 1867,
				"ko_KR": "장식된 닻"
			},
			"description": {
				"en_US": "Heavy boots with extravagant decorations. Reinforce both stance and self-esteem.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "重靴，带有奢侈的装饰。强化姿势和自尊。",
				"ja_JP": "大げさに飾り付けられた重いブーツ。足元の安定と自尊心を同時に強化してくれる。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1868,
				"ko_KR": "공들여 꾸민 무거운 부츠. 자세와 자부심을 강화해 줍니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 19910,
			"level": 29,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 264,
				"defense": 23,
				"focus": 3
			},
			"properties": {
				"STUN_THRESHOLD": 1.05
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 16,
			"name": {
				"en_US": "Carpet Runners",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "魔毯跑鞋",
				"ja_JP": "カーペットランナー<<A<<[CHANGED 2017/08/03]",
				"langUid": 1885,
				"ko_KR": "카펫러너"
			},
			"description": {
				"en_US": "Feel almost alive on your feet. The soles are crafted from real magic carpets.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "脚踩上去感觉像活的一样。鞋底是用真正的飞翔魔毯制成。",
				"ja_JP": "まるで生きているかのような靴。靴底は本物の魔法のカーペットでできている。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1886,
				"ko_KR": "발에 생동감이 전해집니다. 밑창이 진짜 마법 카펫으로 만들어졌습니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 22810,
			"level": 30,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 191,
				"defense": 7,
				"focus": 28
			},
			"properties": {
				"AIMING_MOVEMENT": 1.25,
				"DASH_INVINC": 1.25
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Hidden Blade",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "袖剑",
				"ja_JP": "シークレットブレード<<A<<[CHANGED 2017/08/03]",
				"langUid": 1861,
				"ko_KR": "히든 블레이드"
			},
			"description": {
				"en_US": "Small, surprising and deadly. The preferred weapon of spies and assassins.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "小且致命，间谍和刺客的首选武器。",
				"ja_JP": "小さく、それでいて致命力の高い武器。スパイや暗殺者が好んで使う。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1862,
				"ko_KR": "작지만 놀랍게도 치명적입니다. 첩자와 암살자가 선호하는 무기입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 17770,
			"level": 28,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 29,
				"focus": 20
			},
			"properties": {
				"CRITICAL_DMG": 1.5,
				"AIM_SPEED": 1.1
			},
			"order": 20,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 22,
			"name": {
				"en_US": "Maverick Edge",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "特立独行剑",
				"ja_JP": "マーベリックエッジ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1863,
				"ko_KR": "독불장군 검"
			},
			"description": {
				"en_US": "Once wielded by a young hero of great courage but little sense.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "曾被一位有勇无谋的年轻英雄所使用。",
				"ja_JP": "分別はないが勇気だけはある若き英雄がかつて使った武器。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1864,
				"ko_KR": "한때 젊고 용감하지만 센스가 부족한 영웅이 사용했던 검입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 20530,
			"level": 30,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 38,
				"defense": 15
			},
			"properties": {
				"CROSS_COUNTER": 1.15,
				"MELEE_DMG": 1.2
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 23,
			"name": {
				"en_US": "Western Starfist",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "西斗神拳",
				"ja_JP": "ウェスタン・スターフィスト<<A<<[CHANGED 2017/08/03]",
				"langUid": 1841,
				"ko_KR": "웨스턴 스타피스트"
			},
			"description": {
				"en_US": "Gauntlets with excellent armor. Many owners would already be dead without them.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "带有结实盔甲的拳套。这对拳套的主人拯救了很多人的性命。",
				"ja_JP": "優れた装甲付きのガントレット。これのおかげで命拾いをした所有者は数えきれない。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1842,
				"ko_KR": "높은 방어력의 장갑. 이 장갑이 없었으면 벌써 죽었을 것입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 23460,
			"level": 31,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 26,
				"defense": 33
			},
			"properties": {
				"GUARD_STRENGTH": 1.25,
				"SPIKE_DMG": 1.25
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 20,
			"name": {
				"en_US": "Bergen Probe",
				"de_DE": "Bergen Probe",
				"langUid": 596,
				"zh_CN": "卑尔根探针",
				"ko_KR": "베르겐 탐사기",
				"ja_JP": "ベルゲンのプローブ"
			},
			"description": {
				"en_US": "A lost and found data probe installed by Henry the Researcher.",
				"de_DE": "Eine verlorene und nun gefundene Datenprobe, installiert von Henry dem Wissenschaftler.",
				"fr_FR": "undefined",
				"zh_CN": "一个研究员亨利安装的数据探针。",
				"langUid": 1204,
				"ko_KR": "연구원 헨리가 설치한 분실 데이터 탐사기입니다.",
				"ja_JP": "研究者ヘンリーによって設置されたデータプローブ。失われた後、発見された。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 33,
			"name": {
				"en_US": "Blue Ice Shade",
				"de_DE": "Blaue Eisform",
				"fr_FR": "undefined",
				"zh_CN": "蓝冰证印",
				"ja_JP": "ブルーアイスシェード",
				"ko_KR": "파란색 얼음 셰이드",
				"langUid": 599
			},
			"description": {
				"en_US": "Opens the passage to \\c[3]Maroon Valley\\c[0] and activates \\c[3]Neutral Level 2 Circuits\\c[0].",
				"de_DE": "Öffnet die Passage zum \\c[3]Maronental\\c[0].<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "开启前往\\c[3]褐红峡谷\\c[0]的通道，激活\\c[3]二级中性电路\\c[0]。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "\\c[3]マルーン谷\\c[0]への通行許可証。\\c[3]無属性サーキットのレベル2\\c[0]を有効化する効果もある。<<A<<[CHANGED 2017/11/27]",
				"ko_KR": "\\c[3]마룬 밸리\\c[0]로 가는 길을 열어주며  \\c[3]일반 레벨 2 회로\\c[0]를 활성화합니다.<<A<<[CHANGED 2017/11/16]",
				"langUid": 721
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 24,
			"name": {
				"en_US": "Steak, rare",
				"de_DE": "Steak, selten",
				"fr_FR": "undefined",
				"zh_CN": "三成熟牛排",
				"ja_JP": "レアステーキ",
				"ko_KR": "레어 스테이크",
				"langUid": 626
			},
			"description": {
				"en_US": "A fine, lightly cooked piece of meat that is supposedly not very common.",
				"de_DE": "Ein gutes, leicht gekochtes Stück Fleisch, welches so oft nicht vorkommt.",
				"fr_FR": "undefined",
				"zh_CN": "一块未能烤熟的肉排，稀有等级。",
				"ja_JP": "軽く火を通した上質の肉の塊。レアというからには珍しいのだろう。",
				"ko_KR": "아마도 희귀한 가볍게 조리된 고기입니다. ",
				"langUid": 1275
			},
			"type": "CONS",
			"rarity": 2,
			"cost": 450,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 35,
			"stats": [
				"DEFENSE-1",
				"ATTACK-1"
			],
			"noTrack": false,
			"foodSprite": "STEAK"
		},
		{
			"order": 28,
			"name": {
				"en_US": "Cinder Gem",
				"de_DE": "Aschenjuwel",
				"langUid": 629,
				"zh_CN": "灰烬宝石",
				"ko_KR": "재 보석",
				"ja_JP": "シンダージェム"
			},
			"description": {
				"en_US": "A dark gem which emits strange sparks when touching it.",
				"de_DE": "Ein dunkles Juwel, welches seltsame Funken beim Berühren absondert.",
				"fr_FR": "undefined",
				"langUid": 630,
				"zh_CN": "一颗黑色的宝石，触摸时会发出奇异光辉。",
				"ko_KR": "만지면 특이한 불꽃을 튀기는 검은색 보석입니다.",
				"ja_JP": "触れると奇妙な火花を放つ黒い宝石。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 26,
			"name": {
				"en_US": "Thief's Band",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "窃贼手环",
				"ja_JP": "シーフバンド<<A<<[CHANGED 2017/08/03]",
				"langUid": 1612,
				"ko_KR": "도둑의 밴드"
			},
			"description": {
				"en_US": "Just wearing this band will make enemies drop more Credits in fear.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "带上这个手环可以使敌人在恐惧中掉下更多信用点。",
				"ja_JP": "このバンドを装備するだけで、敵は恐怖でクレジットを多くドロップするようになる。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1613,
				"ko_KR": "이 밴드를 착용하면 적은 두려움에 떨며 더 많은 크레딧을 줍니다."
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 25,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 4,
				"focus": 36
			},
			"properties": {
				"MONEY_PLUS": 1.15
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 29,
			"name": {
				"en_US": "Mighty Strand",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "负重带",
				"ja_JP": "マイティストランド<<A<<[CHANGED 2017/08/03]",
				"langUid": 1767,
				"ko_KR": "강력한 실오라기"
			},
			"description": {
				"en_US": "Once used to train a young warrior aiming to be an all mighty hero.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "曾经用来训练一位年轻的勇士，他希望成为一名全能英雄。",
				"ja_JP": "最強の英雄を目指す、若き戦士の修行に使われたことがある。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1768,
				"ko_KR": "한때 젊은 전사를 강력한 영웅으로 훈련하는 데 사용되었습니다."
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 25,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 4,
				"focus": 38
			},
			"properties": {
				"XP_PLUS": 1.15
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 35,
			"name": {
				"en_US": "Red Flame Shade",
				"de_DE": "Rote Flammenform",
				"fr_FR": "undefined",
				"zh_CN": "赤火证印",
				"ja_JP": "レッドフレイムシェード",
				"ko_KR": "빨간색 불꽃 셰이드",
				"langUid": 682
			},
			"description": {
				"en_US": "Opens the path to \\c[3]Autumn's Fall\\c[0] and activates \\c[3]Elemental Level 2 Circuits\\c[0].",
				"de_DE": "Öffnet den Pfad nach \\c[3]Autumn's Fall\\c[0] und aktiviert die \\c[3]Level 2 Circuits\\c[0].<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "开启前往\\c[3]落秋林地\\c[0]的道路，激活\\c[3]二级元素电路\\c[0]。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "\\c[3]オータムフォール\\c[0]への通行許可証。\\c[3]属性サーキットのレベル2\\c[0]を有効化する効果もある。<<A<<[CHANGED 2017/11/27]",
				"ko_KR": "\\c[3]가을의 부상\\c[0]으로 가는 길을 열어주며 \\c[3]속성 레벨 2 회로\\c[0]를 활성화합니다.<<A<<[CHANGED 2017/11/16]",
				"langUid": 719
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 37,
			"name": {
				"en_US": "Purple Bolt Shade",
				"de_DE": "Blitzschatten Lila",
				"langUid": 684,
				"zh_CN": "紫电证印",
				"ko_KR": "보라색 번개 셰이드",
				"ja_JP": "パープルボルトシェード"
			},
			"description": {
				"en_US": "Grants passage to Grand Krys’kajo together with the Azure Drop Shade.",
				"de_DE": "Gewährt zusammen mit Tropfschatten Azure Zugang zum Grand Krys’kajo.",
				"fr_FR": "undefined",
				"langUid": 931,
				"zh_CN": "和蓝滴证印一起开启通往大卡伊卡乔的道路。",
				"ja_JP": "アズールドロップシェードと合わせて\\c[3]クリュス・カーヨ大神殿\\c[0]への通行許可証となる。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "하늘색 물방울 셰이드와 함께 그랜드 크리스카조로 가는 길을 안내합니다."
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 55,
			"name": {
				"en_US": "-ModifierTester",
				"de_DE": "",
				"langUid": 711,
				"zh_CN": "-被动测试",
				"ko_KR": "-모디파이어 테스터",
				"ja_JP": "-特殊効果テスター"
			},
			"description": {
				"en_US": "Used to test modifiers.",
				"de_DE": "",
				"fr_FR": "undefined",
				"zh_CN": "用来测试",
				"langUid": 1237,
				"ko_KR": "모디파이어를 테스트하는 데 사용됩니다.",
				"ja_JP": "特殊効果のテストに使われた。"
			},
			"type": "EQUIP",
			"rarity": 4,
			"cost": 1000,
			"level": 1,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				]
			},
			"properties": {
				"PERFECT_GUARD_RESET": 2,
				"PERFECT_GUARD_WINDOW": 2
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"order": 48,
			"name": {
				"en_US": "Meister Gloves",
				"de_DE": "Master Handschuhe",
				"langUid": 714,
				"zh_CN": "大师手套",
				"ko_KR": "장인의 장갑",
				"ja_JP": "マイスターグローブ"
			},
			"description": {
				"en_US": "Worn and old gloves once belonging to a master of parries.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "招架大师曾经使用的旧手套。",
				"ja_JP": "受け流しの達人が所持していた、着古された手袋。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1327,
				"ko_KR": "회피의 장인이 가지고 있었던 낡은 장갑입니다."
			},
			"type": "EQUIP",
			"rarity": 4,
			"cost": 0,
			"level": 1,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": -400,
				"attack": 70,
				"defense": 5,
				"focus": 40
			},
			"properties": {
				"PERFECT_GUARD_WINDOW": 1.5,
				"PERFECT_GUARD_RESET": 2
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 26,
			"name": {
				"en_US": "Aspiration Proof",
				"de_DE": "Strebens Beweis",
				"langUid": 728,
				"zh_CN": "升灵之证",
				"ko_KR": "열망의 표식",
				"ja_JP": "志望の証"
			},
			"description": {
				"en_US": "Some old looking image of a Frobbit, hewn into stone from Mt. Bergen. ",
				"de_DE": "Ein irgendwie alt aussehendes Gemälde eines Frobbit.",
				"fr_FR": "undefined",
				"langUid": 1079,
				"zh_CN": "一块刻有蛙兔图案的古老卑尔根山岩。",
				"ko_KR": "오래된 프로빗 모양으로, 베르겐 산의 돌을 깎아 만들었습니다.",
				"ja_JP": "古びたフロビットの彫刻が彫り込まれた、ベルゲン山の石。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 10,
			"name": {
				"en_US": "Wooly Socks",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "羊毛袜",
				"ja_JP": "ウールソックス<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "양털 양말",
				"langUid": 1727
			},
			"description": {
				"en_US": "Soft and warming socks, hand-knitted from healthy goat-wool by very patient monks.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "柔软保暖的袜子，由耐心的僧侣用高级羊毛手工编织而成。",
				"ja_JP": "柔らかく温かい靴下。忍耐強い修行僧が、健康なヤギから取れたウールを使って編み上げた。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "부드럽고 따뜻한 양말로, 인내심이 강한 수도사들이 양털로 직접 짜서 만들었습니다.",
				"langUid": 1728
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 5987,
			"level": 20,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1.1,
					1,
					1
				],
				"hp": 199,
				"defense": 3,
				"focus": 7
			},
			"properties": {
				"COND_HEALING": 1.35,
				"HP_REGEN": 1.03
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 52,
			"name": {
				"en_US": "Maroon Cave Pass",
				"de_DE": "Maronenhöhlenpass",
				"langUid": 732,
				"zh_CN": "褐红洞穴通行证",
				"ko_KR": "마룬 동굴 통행증",
				"ja_JP": "マルーンの洞窟の通行証"
			},
			"description": {
				"en_US": "Pass to access the sacred cave below the \\c[3]Maroon Tree\\c[0].",
				"de_DE": "Gewährt Zugang zur heiligen Höhle unter dem  \\c[3]Maronenbaum\\c[0].",
				"fr_FR": "undefined",
				"langUid": 733,
				"zh_CN": "允许前往\\c[3]褐红巨树\\c[0]下方的神圣洞穴。",
				"ko_KR": "\\c[3]단풍나무\\c[0] 아래에 있는 신성한 동굴에 들어갈 수 있는 통행증입니다.",
				"ja_JP": "\\c[3]マルーンの木\\c[0]の地下にある神聖な洞窟への通行許可証。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 59,
			"name": {
				"en_US": "Shiny Orb",
				"de_DE": "Glänzende Kugel",
				"langUid": 734,
				"zh_CN": "闪光球",
				"ko_KR": "빛나는 구슬",
				"ja_JP": "光のオーブ"
			},
			"description": {
				"en_US": "A shiny orb that is indeed very shiny. The statue in \\c[3]Ba'kii Kum\\c[0] should react to it.",
				"de_DE": "Eine glänzende Kugel, die tatsächlich sehr glänzt. Die Statue in \\c[3]Ba'kii Kum\\c[0] sollte darauf reagieren.",
				"fr_FR": "undefined",
				"langUid": 735,
				"zh_CN": "一个闪闪发光的球，真的超级闪。\\c[3]巴基库姆\\c[0]的雕像应该会对其有所反应。",
				"ko_KR": "정말 반짝거리는 구슬입니다. \\c[3]바키 쿰\\c[0]에 있는 동상이 이에 반응합니다.",
				"ja_JP": "光のオーブらしくとてもまぶしい光を放つ。\\c[3]バキーイ・クム\\c[0]にある石像が反応するだろう。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 43,
			"name": {
				"en_US": "Laser Pickaxe",
				"de_DE": "Laser-Spitzhacke",
				"langUid": 736,
				"zh_CN": "激光镐",
				"ko_KR": "레이저 곡괭이",
				"ja_JP": "レーザーツルハシ"
			},
			"description": {
				"en_US": "A highly advanced mining tool based on a ages old classic.",
				"de_DE": "Ein sehr fortschrittliches Bergbaugerät. Ein echter Klassiker",
				"fr_FR": "undefined",
				"langUid": 737,
				"zh_CN": "基于古时经典物品研发而出的先进开采工具。",
				"ko_KR": "옛날부터 이어져 내려온 최고급 채굴 도구입니다.",
				"ja_JP": "古代技術を参考にして作られた、最先端の鉱山工具。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 44,
			"name": {
				"en_US": "Laser TNT",
				"de_DE": "Laser-TNT",
				"langUid": 738,
				"zh_CN": "激光炸药",
				"ko_KR": "레이저 고폭탄",
				"ja_JP": "レーザーTNT"
			},
			"description": {
				"en_US": "Conventional chemical explosives combined with lasers. What could be stronger?",
				"de_DE": "Gewöhnlicher Sprengstoff kombiniert mit Lasern. Was könnte schön schief gehen?",
				"fr_FR": "undefined",
				"langUid": 744,
				"zh_CN": "常规化学炸药和激光组合。还有什么比它更厉害？",
				"ko_KR": "레이저와 혼합된 전통적인 화학 폭발물. 이보다 더 강한 것이 있을까요?",
				"ja_JP": "レーザーと従来の化学爆発物を組み合わせたもの。これより強い爆発物なんてある？"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 45,
			"name": {
				"en_US": "Mining Docs",
				"de_DE": "Minendokumente",
				"langUid": 740,
				"zh_CN": "采矿日志",
				"ko_KR": "채굴 서류",
				"ja_JP": "鉱山資料"
			},
			"description": {
				"en_US": "A long documentation describing the workings of the mine, complete in 70 languages.",
				"de_DE": "Eine lange Dokumentation über die Arbeiten in der Mine, übersetzt in 70 Sprachen.",
				"fr_FR": "undefined",
				"langUid": 773,
				"zh_CN": "一份用70种语言写就的长篇文档，讲述的是采矿的工作情况。",
				"ko_KR": "채굴 작업에 대한 긴 설명서로, 70가지 언어로 쓰여 있습니다.",
				"ja_JP": "鉱山の仕組みを記述した長文の文書。70言語に翻訳されている。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 18,
			"name": {
				"en_US": "Parched Leaves",
				"de_DE": "Trockene Blätter",
				"langUid": 789,
				"zh_CN": "干枯的叶子",
				"ko_KR": "마른 낙엽",
				"ja_JP": "カラカラの葉"
			},
			"description": {
				"en_US": "Leaves covered with strange markings resembling animals.",
				"de_DE": "Blätter mit Markierungen seltsamer Tiere.",
				"fr_FR": "",
				"langUid": 780,
				"zh_CN": "叶子上带有奇怪的标志，像某种动物。",
				"ko_KR": "동물을 연상시키는 특이한 무늬의 낙엽입니다.",
				"ja_JP": "動物に似た奇妙な模様におおわれた葉っぱ。"
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 19,
			"name": {
				"en_US": "Ripe Apples",
				"de_DE": "Reife Äpfel",
				"langUid": 790,
				"zh_CN": "成熟的苹果",
				"ko_KR": "익은 사과",
				"ja_JP": "完熟リンゴ"
			},
			"description": {
				"en_US": "These sweet apples are commonly used in juicy fruit salads.",
				"de_DE": "Diese süßen Äpfel werden in der Regel bei saftigen Fruchtsalaten verwendet.",
				"fr_FR": "",
				"langUid": 781,
				"zh_CN": "这些甜苹果常用于制作多汁的水果沙拉。",
				"ko_KR": "이 달콤한 사과는 보통 즙이 많은 과일 샐러드에 사용됩니다.",
				"ja_JP": "この甘いリンゴは、みずみずしいフルーツサラダによく使われる。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 21,
			"name": {
				"en_US": "White Grain",
				"de_DE": "Weißes Korn",
				"langUid": 791,
				"zh_CN": "白色谷物",
				"ko_KR": "백색 곡물",
				"ja_JP": "白い穀物"
			},
			"description": {
				"en_US": "Pure grain found near ruins all over Autumn's Fall.",
				"de_DE": "Pures Korn, gefunden in der Nähe der Ruinen von Autumn's Fall.",
				"fr_FR": "",
				"langUid": 782,
				"zh_CN": "纯净的谷物，发现于落秋林地废墟附近。",
				"ko_KR": "가을의 몰락 곳곳의 유적지에 발견되는 순수 곡물입니다.",
				"ja_JP": "オータムフォールの随所の遺跡の近くでみつかる純粋な穀物。"
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 22,
			"name": {
				"en_US": "Sunset Dew",
				"de_DE": "Sonnentau",
				"langUid": 792,
				"zh_CN": "日暮露",
				"ko_KR": "해 질 녘의 이슬",
				"ja_JP": "サンセットデュー"
			},
			"description": {
				"en_US": "Minerals found inside this dew make it appear orange when held against light.",
				"de_DE": "Enthält Elektrolyte und schimmert sonnig.",
				"fr_FR": "",
				"langUid": 783,
				"zh_CN": "这种露水种含有矿物，在阳光照耀下会呈现出橘色。",
				"ko_KR": "이 이슬에 함유된 미네랄을 빛에 비치면 주황색으로 나타납니다.",
				"ja_JP": "光にかざすとこの露に含まれるミネラルが反射してオレンジ色に見える。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 20,
			"name": {
				"en_US": "Wolf Cicada",
				"de_DE": "Wolfszikade",
				"langUid": 779,
				"zh_CN": "狼蝉",
				"ko_KR": "늑대 매미",
				"ja_JP": "オオカミセミ"
			},
			"description": {
				"en_US": "A legendary autumn bug. Its melody resembles that of a howling wolf.",
				"de_DE": "Ein legendärer Herbstkäfer. Seine Melodie imitiert das Heulen eines Wolfs.",
				"fr_FR": "",
				"langUid": 784,
				"zh_CN": "一种传说中秋季昆虫。它的蝉鸣声就像狼嚎。",
				"ko_KR": "전설의 가을벌레입니다. 이 매미의 울음소리는 늑대의 울음소리를 연상케 합니다.",
				"ja_JP": "伝説の秋の虫。奏でる音色はオオカミの遠吠えに似ている。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 200,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 23,
			"name": {
				"en_US": "Crimson Dragonfly",
				"de_DE": "Rote Drachenfliege",
				"langUid": 785,
				"zh_CN": "红蜻蜓",
				"ko_KR": "진홍색 잠자리",
				"ja_JP": "クリムゾントンボ"
			},
			"description": {
				"en_US": "These creatures only appear at night, sparkling dark red.",
				"de_DE": "Diese Kreaturen erscheinen bei Nacht und glänzen in dunklem Rot.",
				"fr_FR": "",
				"langUid": 786,
				"zh_CN": "这些生物只会在夜晚出现，闪烁着深红色的光。",
				"ko_KR": "이 곤충은 어두운 붉은 불빛을 내며 밤에만 나타납니다.",
				"ja_JP": "夜にしか姿を見せない生き物。暗い赤色の光を放つ。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 200,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 35,
			"name": {
				"en_US": "-Nirustein",
				"de_DE": "-Nirustein",
				"langUid": 811,
				"zh_CN": "-极限石",
				"ko_KR": "-니루스타인",
				"ja_JP": "-ニールシュテイン"
			},
			"description": {
				"en_US": "The ultimate speedrunning item. Aim to become the fastest thing alive!",
				"de_DE": "Das ultimate Item für echte Hochgeschwindigkeitsigel! Wer will der Schnellste sein?",
				"fr_FR": "",
				"zh_CN": "终极跑酷物品。成为宇宙最快吧！",
				"langUid": 1238,
				"ko_KR": "빠르게 달릴 수 있는 궁극의 아이템. 살아있는 것 중 가장 빠른 것을 목표로 합니다!",
				"ja_JP": "スピードランにおける究極のアイテム。地上最速の存在を目指せ！"
			},
			"type": "EQUIP",
			"rarity": 4,
			"cost": 0,
			"level": 1,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				]
			},
			"properties": {
				"AIMING_MOVEMENT": 11
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"order": 46,
			"name": {
				"en_US": "Flintzer Excretions",
				"de_DE": "Flintzer Exkrement",
				"langUid": 830,
				"zh_CN": "蚤虫分泌物",
				"ko_KR": "플린저 배설물",
				"ja_JP": "ヒウチムシの排出物"
			},
			"description": {
				"en_US": "Weird lump of mass secreted by Flintzer. Is usually very soft but hardens on touch.",
				"de_DE": "Seltsamer Masseklumpen, ausgeschieden von Flintzer.",
				"fr_FR": "undefined",
				"langUid": 831,
				"zh_CN": "由蚤虫分泌的奇怪块状物体。通常情况下很柔软，触摸则变硬。",
				"ko_KR": "플린저가 분비한 특이한 덩어리. 보통은 부드럽지만 만지면 단단해집니다.",
				"ja_JP": "ヒウチムシが分泌した奇妙な塊。最初は柔らかいが、触れると硬くなる。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 48,
			"name": {
				"en_US": "Curly Farn",
				"de_DE": "Lockiger Farn",
				"langUid": 833,
				"zh_CN": "蜷曲植物",
				"ko_KR": "양치식물",
				"ja_JP": "ネジマキシダ"
			},
			"description": {
				"en_US": "This leaf fell from a jungle plant and curled up on the ground.",
				"de_DE": "Dieses Laub fiel von einer Pflanze im Dschungel und rollte sich auf dem Boden zusammen.",
				"fr_FR": "undefined",
				"langUid": 934,
				"zh_CN": "这片叶子从密林植物落下，在地上蜷曲起来。",
				"ko_KR": "정글 식물의 잎으로 땅에 있으면 동그랗게 말립니다.",
				"ja_JP": "ジャングルの植物の葉。地面に落ちると勝手に巻き上がる。"
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 49,
			"name": {
				"en_US": "Steel Comb",
				"de_DE": "Stahlkamm",
				"langUid": 835,
				"zh_CN": "钢蜂巢",
				"ko_KR": "강철 벌집",
				"ja_JP": "スチールハチノス"
			},
			"description": {
				"en_US": "The honeycomb is so sturdy that it is used to craft armor.",
				"de_DE": "Dieser Kamm ist so hart, dass er benutzt wird, um damit Rüstungen herzustellen.",
				"fr_FR": "undefined",
				"langUid": 836,
				"zh_CN": "这个蜂巢非常坚固，甚至可以用来制作装甲。",
				"ko_KR": "이 벌집은 너무도 단단해 갑옷을 제작하는 데 사용됩니다.",
				"ja_JP": "このハチの巣はよろいを作れるほどに頑丈。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 50,
			"name": {
				"en_US": "Elder Wood",
				"de_DE": "Altes Holz",
				"langUid": 837,
				"zh_CN": "老木头",
				"ko_KR": "고참 목재",
				"ja_JP": "原始の木材"
			},
			"description": {
				"en_US": "A piece of wood from the oldest trees found in the jungle.",
				"de_DE": "Ein Stück Holz von den ältesten Bäumen, die im Dschungel gefunden werden können.",
				"fr_FR": "undefined",
				"langUid": 843,
				"zh_CN": "一块木头，来自丛林中最古老的树木。",
				"ko_KR": "정글에서 가장 오래된 나무의 목재입니다.",
				"ja_JP": "ジャングルに生える最古の木からとれた木材の山。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 200,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 52,
			"name": {
				"en_US": "Venom Shroom",
				"de_DE": "Giftpilz",
				"langUid": 839,
				"zh_CN": "毒蘑菇",
				"ko_KR": "독버섯",
				"ja_JP": "ドクキノコ"
			},
			"description": {
				"en_US": "Poisoned mushroom used to brew oils for weapons.",
				"de_DE": "Giftiger Pilz aus dem Öle für Waffen gemacht werden können.",
				"fr_FR": "undefined",
				"langUid": 840,
				"zh_CN": "有毒的蘑菇，可以提炼出毒素涂在武器上。",
				"ko_KR": "무기에 사용되는 윤활유를 만들기 위한 독버섯입니다.",
				"ja_JP": "武器用の毒を生成するのにつかわれる毒キノコ。"
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 53,
			"name": {
				"en_US": "Glowing Sphere",
				"de_DE": "Glühende Sphere",
				"langUid": 841,
				"zh_CN": "发光球",
				"ko_KR": "빛나는 구",
				"ja_JP": "ヒカリダマ"
			},
			"description": {
				"en_US": "A luminescent sphere glowing because of chemical reactions inside it.",
				"de_DE": "Eine lumineszierend Sp#he die glüht, weil im Inneren eine chemische Reaktion stattfindet.",
				"fr_FR": "undefined",
				"langUid": 842,
				"zh_CN": "一个因为内部在发生化学反应而发光的球体。",
				"ko_KR": "내부의 화학 반응으로 빛이 나는 구입니다.",
				"ja_JP": "内部の化学反応により発光している球体。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 54,
			"name": {
				"en_US": "Virus Root",
				"de_DE": "Virusquelle",
				"langUid": 844,
				"zh_CN": "病毒根",
				"ko_KR": "바이러스 뿌리",
				"ja_JP": "病の根"
			},
			"description": {
				"en_US": "One of the roots responsible to the Infestation of a part of \\v[area.jungle.name].",
				"de_DE": "Eine der Wurzeln, die für die Infizierung von  \\v[area.jungle.name] verantwortlich sind.",
				"fr_FR": "undefined",
				"langUid": 1080,
				"zh_CN": "感染\\v[area.jungle.name]的根源的一部分。",
				"ko_KR": "\\v[area.jungle.name]의 한 부분으로 감염에 반응하는 뿌리입니다.",
				"ja_JP": "\\v[area.jungle.name]で感染の元となっている根っこの1つ。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 200,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 55,
			"name": {
				"en_US": "Blue Mango",
				"de_DE": "Blaue Mango",
				"langUid": 846,
				"zh_CN": "蓝色芒果",
				"ko_KR": "파란색 망고",
				"ja_JP": "ブルーマンゴー"
			},
			"description": {
				"en_US": "The bluish color of this fruit make it look inedible despite its sweet taste.",
				"de_DE": "Scheckt so gut wie sie ungenießbar aussieht.",
				"fr_FR": "undefined",
				"langUid": 847,
				"zh_CN": "这种水果外表的蓝色看起来似乎不可食用，但它尝起来非常甜。",
				"ko_KR": "달콤한 맛임에도 불구하고 이 파란 색깔이 먹을 수 없는 망고로 보이게 합니다.",
				"ja_JP": "味自体は甘いのだが、青い色のせいで食べたいという人はあまりいない。"
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 56,
			"name": {
				"en_US": "Exotic Resin",
				"de_DE": "Exotisches Harz",
				"langUid": 849,
				"zh_CN": "异域树脂",
				"ko_KR": "이국적인 송진",
				"ja_JP": "異国の樹脂"
			},
			"description": {
				"en_US": "This colorful resin is commonly used to harden wood constructions.",
				"de_DE": "Dieses farbenfrohe Harz wird zum Aushärten von Holz verwendet.",
				"fr_FR": "undefined",
				"langUid": 850,
				"zh_CN": "这种五颜六色的树脂通常用来加固木质结构。",
				"ko_KR": "이 다채로운 송진은 보통 목조 건물을 단단하게 하는 데 쓰입니다.",
				"ja_JP": "この色彩豊かな樹脂は木造建築の補強によく使われる。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 57,
			"name": {
				"en_US": "Star Fruit",
				"de_DE": "Sternfrucht",
				"langUid": 851,
				"zh_CN": "星星果",
				"ko_KR": "별 열매",
				"ja_JP": "スターフルーツ"
			},
			"description": {
				"en_US": "Star-shaped fruit. Its origin date back to a small island in the ocean.",
				"de_DE": "Sternenförmige Frucht. Man sagt, sie stamme von einer Insel aus dem Ozean.<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"langUid": 859,
				"zh_CN": "星星状的水果。原产于一个小型海岛。<<A<<[CHANGED 2017/10/13]",
				"ko_KR": "별 모양의 열매입니다. 바다의 작은 섬이 원산지입니다.<<A<<[CHANGED 2017/10/17]",
				"ja_JP": "星の形をしたフルーツ。その原産地は、海に浮かぶ小さな島だという。<<A<<[CHANGED 2017/11/04]"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 200,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 58,
			"name": {
				"en_US": "Common Planter",
				"de_DE": "Simpler Pflanzer",
				"langUid": 853,
				"zh_CN": "普通素鱼",
				"ja_JP": "プラントフィッシュ",
				"ko_KR": "흔한 식물고기"
			},
			"description": {
				"en_US": "This fish jumps out of rivers into plants to absorb healthy nutrients.",
				"de_DE": "Diser Fisch absorbiert Nüsse aus Pflanzen.",
				"fr_FR": "undefined",
				"langUid": 854,
				"zh_CN": "这种鱼从河里跳到植物上来吸收健康的营养。",
				"ko_KR": "이 물고기는 강에서 튀어나와 풀 속으로 들어가 영양분을 흡수합니다.",
				"ja_JP": "この魚は川から草木へ飛び上がり、栄養を吸収する。"
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 59,
			"name": {
				"en_US": "Spiky Nut",
				"de_DE": "Stachelige Nuss",
				"langUid": 855,
				"zh_CN": "尖果",
				"ko_KR": "뾰족한 견과류",
				"ja_JP": "トゲナッツ"
			},
			"description": {
				"en_US": "\\v[combat.name.jungle/parrot] store these in nearby water plants in case they need food.",
				"de_DE": "\\v[combat.name.jungle/parrot] lagern diese in Pflanzen nahe am Wasser.",
				"fr_FR": "undefined",
				"langUid": 1052,
				"zh_CN": "\\v[combat.name.jungle/parrot]会将这些果子存储在附近的水生植物里，以备不时之需。",
				"ko_KR": "\\v[combat.name.jungle/parrot]은 식량이 필요할 때 이걸 근처 수초에 보관합니다.",
				"ja_JP": "\\v[combat.name.jungle/parrot]はお腹が空いたときに備え、水草の中にこの木の実を隠すという。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 60,
			"name": {
				"en_US": "Moon Fruit",
				"de_DE": "Mondfrucht",
				"langUid": 857,
				"zh_CN": "月亮果",
				"ko_KR": "달 열매",
				"ja_JP": "ムーンフルーツ"
			},
			"description": {
				"en_US": "A yellow bent fruit only found in rainy parts of \\v[area.jungle.name].",
				"de_DE": "Eine gelbe gebogene Frucht.",
				"fr_FR": "undefined",
				"langUid": 1081,
				"zh_CN": "一种黄色弯曲的果实，生长在\\v[area.jungle.name]的雨林地区。",
				"ko_KR": "\\v[area.jungle.name]의 비가 오는 지역에서만 이 노랗고 굽은 열매를 찾을 수 있습니다.",
				"ja_JP": "\\v[area.jungle.name]の中でも雨の多い地域にしか生息しない、黄色い曲がったフルーツ。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 200,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 61,
			"name": {
				"en_US": "Galaxy Berry",
				"de_DE": "Galaxie Beere",
				"langUid": 860,
				"zh_CN": "银河浆果",
				"ko_KR": "은하 베리",
				"ja_JP": "ギャラクシーベリー"
			},
			"description": {
				"en_US": "Strange shimmering fruit. The inside seems to magically spin.",
				"de_DE": "Seltsam schimmernde Frucht. Das Innere scheint sich selbst zu drehen.",
				"fr_FR": "undefined",
				"langUid": 861,
				"zh_CN": "闪闪发亮的奇怪水果。内部似乎能魔法似地旋转。",
				"ko_KR": "특이한 빛의 열매입니다. 안을 살펴보면 무언가가 마법처럼 돌아가고 있는 것 같습니다.",
				"ja_JP": "キラキラと光る不思議なフルーツ。内部は魔法のようにくるくる回っている。"
			},
			"type": "TRADE",
			"rarity": 3,
			"cost": 1000,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 51,
			"name": {
				"en_US": "Royal Hive",
				"de_DE": "Hauptbienenstock",
				"langUid": 862,
				"zh_CN": "皇家蜂巢",
				"ko_KR": "로열 벌집",
				"ja_JP": "ロイヤルハチノス"
			},
			"description": {
				"en_US": "A special bee hive with the same density as a diamond.",
				"de_DE": "Ein spezieller Bienenstock mit der selben Dichte eines Diamanten.",
				"fr_FR": "undefined",
				"langUid": 863,
				"zh_CN": "一种特殊的蜂巢，密度和钻石一样。",
				"ko_KR": "다이아몬드와 같은 밀도인 특별한 벌집입니다.",
				"ja_JP": "ダイヤモンドと同等の密度を誇る特別なハチの巣。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 200,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 49,
			"name": {
				"en_US": "Progression Proof",
				"de_DE": "Fortschrittsbeweis",
				"langUid": 865,
				"zh_CN": "进化证明",
				"ko_KR": "진전의 표식",
				"ja_JP": "進行の証"
			},
			"description": {
				"en_US": "Some old looking image of a PengPeng, hewn into ice-coated stone from Mt. Bergen. ",
				"de_DE": "Ein seltsam aussehendes Bild eines PengPeng in einem Stein aus Bergen.",
				"fr_FR": "undefined",
				"langUid": 1073,
				"zh_CN": "一些蓬蓬的古老形象，开凿在卑尔根山的冰雪石头上。",
				"ko_KR": "오래된 펭펭 모양으로, 베르겐 산의 얼음으로 코팅된 돌을 깎아 만들었습니다.",
				"ja_JP": "薄い氷に包まれたベルゲン山の石。古びたペンペンの彫刻が彫り込まれている。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"name": {
				"en_US": "Silver Goggles",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "银质护目镜",
				"ja_JP": "シルバーゴーグル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1827,
				"ko_KR": "은색 고글"
			},
			"description": {
				"en_US": "Both silver frames and the flawless glass are giving of an impressive shine.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "两个银色的框架，无暇的玻璃上闪耀着难以磨灭的光芒。",
				"ja_JP": "このゴーグルの銀のフレームと歪み1つないレンズは、驚くような輝きを放っている。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1828,
				"ko_KR": "은빛 테와 결점 없는 유리가 인상 깊은 빛을 냅니다."
			},
			"type": "EQUIP",
			"cost": 29450,
			"level": 34,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"defense": 4,
				"focus": 63
			},
			"properties": {},
			"rarity": 1,
			"order": 19,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Titan Goggles",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "泰坦护目镜",
				"ja_JP": "タイタンゴーグル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1421,
				"ko_KR": "티탄 고글"
			},
			"description": {
				"en_US": "Very durable goggles that also offer visual augmentation.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "非常耐用的护目镜，同时提供视觉增强功能。",
				"ja_JP": "耐久性が非常に高く、視力も増強してくれるゴーグル。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1422,
				"ko_KR": "대상을 크게 보이게 하는 튼튼한 고글입니다."
			},
			"type": "EQUIP",
			"cost": 46750,
			"level": 42,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"defense": 5,
				"focus": 89
			},
			"properties": {},
			"rarity": 1,
			"order": 22,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 24,
			"name": {
				"en_US": "Silver Edge",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "银刃",
				"ja_JP": "シルバーエッジ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1829,
				"ko_KR": "은검"
			},
			"description": {
				"en_US": "Said to be effective against the unnatural. Works just fine against everything though.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "据说只对非自然物体有效。实际上对一切物体都行得通。",
				"ja_JP": "超常のものに対して有効だという。その効果がなくても十分強い武器ではあるのだが。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1830,
				"ko_KR": "비정상적인 적에 효과적입니다. 물론, 모든 적에 효과적이란 뜻이죠."
			},
			"type": "EQUIP",
			"rarity": 1,
			"cost": 29375,
			"level": 34,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 42,
				"defense": 25
			},
			"properties": {},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 28,
			"name": {
				"en_US": "Titan Edge",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "泰坦之刃",
				"ja_JP": "タイタンエッジ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1472,
				"ko_KR": "티탄 검"
			},
			"description": {
				"en_US": "With two of these powerful weapons you could slay even the largest of foes.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "这玩意只要拿到两把，那你连泰坦都能杀死。",
				"ja_JP": "この強力な武器を1対そろえれば、どんなに巨大な敵も真っ二つだろう。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1473,
				"ko_KR": "이 강력한 검 두 자루만 있다면, 거대한 적도 벨 수 있습니다."
			},
			"type": "EQUIP",
			"rarity": 1,
			"cost": 46475,
			"level": 42,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 59,
				"defense": 34
			},
			"properties": {},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Silver Mail",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "银质盔甲",
				"ja_JP": "シルバーメイル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1831,
				"ko_KR": "은 갑옷"
			},
			"description": {
				"en_US": "A sturdy mail, made from silver. Perfect when sleeping in a haunted castle.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "银制的坚固盔甲。睡在闹鬼城堡也不怕。",
				"ja_JP": "銀製の頑丈なよろい。呪われた城で寝泊まりするときなど、役立ちそうだ。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1832,
				"ko_KR": "은으로 만든 단단한 갑옷. 귀신 들린 성에서 잘 때 딱입니다."
			},
			"type": "EQUIP",
			"cost": 29725,
			"level": 34,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 480,
				"defense": 19
			},
			"properties": {},
			"rarity": 1,
			"order": 17,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Titan Mail",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "泰坦盔甲",
				"ja_JP": "タイタンメイル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1532,
				"ko_KR": "티탄 갑옷"
			},
			"description": {
				"en_US": "Made from titanium, one of the strongest materials known to man.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "由钛制成，这是目前人类已知的最强材料。",
				"ja_JP": "人類が知る最強の素材の1つであるチタニウムを使って作られている。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1533,
				"ko_KR": "인류가 아는 가장 강력한 물질인 티타늄으로 만들었습니다."
			},
			"type": "EQUIP",
			"cost": 46925,
			"level": 42,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 695,
				"defense": 25
			},
			"properties": {},
			"rarity": 1,
			"order": 20,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Silver Boots",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "银靴",
				"ja_JP": "シルバーブーツ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1833,
				"ko_KR": "은 부츠"
			},
			"description": {
				"en_US": "The quality of these boots almost makes up for all the polishing they need.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "这些靴子的质量极佳，不枉费漫长的加工过程。",
				"ja_JP": "こまめに磨く必要があるが、その価値があると思いたくなるほど品質のいいブーツ。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1834,
				"ko_KR": "이 신발의 특성상 광택을 낼 필요가 없습니다."
			},
			"type": "EQUIP",
			"cost": 29450,
			"level": 34,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 365,
				"defense": 11,
				"focus": 20
			},
			"properties": {},
			"rarity": 1,
			"order": 17,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Titan Boots",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "泰坦靴",
				"ja_JP": "タイタンブーツ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1536,
				"ko_KR": "티탄 부츠"
			},
			"description": {
				"en_US": "While extremely robust, they are not actually made for titans, so they will fit just fine.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "这些靴子非常强大，但并非为泰坦制作，穿起来正合脚。",
				"ja_JP": "ケタ外れの頑丈さを誇るが、実際に巨人のために作られたわけではないので、サイズはぴったり。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1537,
				"ko_KR": "매우 튼튼하지만, 거인을 위해 만든 건 아니므로 잘 맞을 겁니다."
			},
			"type": "EQUIP",
			"cost": 46750,
			"level": 42,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 480,
				"defense": 19,
				"focus": 28
			},
			"properties": {},
			"rarity": 1,
			"order": 20,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 63,
			"name": {
				"en_US": "Zir'vitar Key",
				"de_DE": "Zir'vitar Schlüssel",
				"langUid": 893,
				"zh_CN": "齐维塔钥匙",
				"ko_KR": "지르비타르 열쇠",
				"ja_JP": "ジル・ヴィタルの鍵"
			},
			"description": {
				"en_US": "A regular key for Zir’vitar Temple.",
				"de_DE": "Gewöhnlicher Zir'vitar Schlüssel",
				"fr_FR": "undefined",
				"langUid": 1068,
				"zh_CN": "开启齐维塔神庙的普通钥匙。",
				"ko_KR": "지르비타르 사원의 기본 열쇠입니다.",
				"ja_JP": "ジル・ヴィタル神殿で使う普通の鍵。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 47,
			"name": {
				"en_US": "GIT",
				"de_DE": "ZIT",
				"langUid": 895,
				"zh_CN": "山羊语翻译器",
				"ko_KR": "GIT",
				"ja_JP": "GIT"
			},
			"description": {
				"en_US": "Goat Interspecies Translator. Allows for communication with intelligent goats.",
				"de_DE": "Ziegen Interspezies Transkommunikator. Erlaubt es, mit intelligenten Ziegen zu sprechen.",
				"fr_FR": "undefined",
				"langUid": 896,
				"zh_CN": "山羊语翻译器。可以与有智慧的山羊交流。",
				"ko_KR": "염소 종간 번역기. 똑똑한 염소와 대화할 수 있습니다.",
				"ja_JP": "ゴート・インタースピーシーズ・トランスレーター。知能を持つヤギとの会話を可能にする。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 95,
			"name": {
				"en_US": "Static Furball",
				"de_DE": "Statischer Knäul",
				"langUid": 904,
				"zh_CN": "静电毛球",
				"ko_KR": "정전기가 생기는 털 뭉치",
				"ja_JP": "デンキケダマ"
			},
			"description": {
				"en_US": "A really soft ball of fur close to the critical mass.",
				"de_DE": "Ein wirklich weicher Ball, nahe der kritischen Masse.",
				"fr_FR": "undefined",
				"langUid": 1040,
				"zh_CN": "一个相当柔软的毛球，靠近它可能很危险。",
				"ko_KR": "임계 질량에 가까운 부드러운 털 뭉치입니다.",
				"ja_JP": "臨界質量に達してしまいそうな、とても柔らかい毛玉。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 1390,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 96,
			"name": {
				"en_US": "Slime Drop",
				"de_DE": "Schleimtropfen",
				"langUid": 906,
				"zh_CN": "粘液滴",
				"ko_KR": "슬라임 방울",
				"ja_JP": "スライムドロップ"
			},
			"description": {
				"en_US": "The classic. Probably want to keep that in a jar.",
				"de_DE": "Der Klassiker. Besser in einem Gefäß aufzubewahren.",
				"fr_FR": "undefined",
				"langUid": 1041,
				"zh_CN": "非常经典。也许你想把它们存储在罐子里。",
				"ko_KR": "고전적입니다. 병에 보관하고 싶군요.",
				"ja_JP": "懐かしのアイテム。瓶に保存しておこう。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 950,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 97,
			"name": {
				"en_US": "Palette Blossom",
				"de_DE": "Palette Blüten",
				"langUid": 908,
				"zh_CN": "调色花瓣",
				"ko_KR": "팔레트 꽃",
				"ja_JP": "パレットブロッサム"
			},
			"description": {
				"en_US": "This leaf can be used to create all possible colors. In a range of 0-255 that is.",
				"de_DE": "Dieses Gewächs kann in nahezu allen Farben auftreten. Sie reichen von 0-255.",
				"fr_FR": "undefined",
				"langUid": 1042,
				"zh_CN": "这片花瓣可以用来创造出范围在0-255中所有可能的颜色。",
				"ko_KR": "이 잎으로 모든 색을 만들 수 있습니다. 0-255 사이의 색을요.",
				"ja_JP": "この葉っぱを使うと全ての色を再現することができる。正確には0から255まで。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 1060,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 98,
			"name": {
				"en_US": "Huge Nut",
				"de_DE": "Große Nuss",
				"langUid": 910,
				"zh_CN": "巨大的螺帽",
				"ko_KR": "거대 견과류",
				"ja_JP": "巨大ナッツ"
			},
			"description": {
				"en_US": "Spit out by Pagaguns as defensive measures. Can only be busted with strong pliers.",
				"de_DE": "Von Pagaguns ausgespuckt. Kann nur mit harten Zangen geknackt werden.",
				"fr_FR": "undefined",
				"langUid": 1043,
				"zh_CN": "由帕帕冈防御时吐出。只能用坚固的老虎钳打碎。",
				"ko_KR": "파파건은 이걸 뱉어 자기방어용으로 사용합니다. 강력한 펜치로만 쪼갤 수 있습니다.",
				"ja_JP": "パパガンが防衛手段として放ってくる木の実。割るには強力なペンチが必要。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 1337,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 100,
			"name": {
				"en_US": "Lazy Claw",
				"de_DE": "Faule Klaue",
				"langUid": 912,
				"zh_CN": "懒爪",
				"ko_KR": "게으른 손톱",
				"ja_JP": "怠惰なツメ"
			},
			"description": {
				"en_US": "This callous claw is in need of a thorough manicure. ",
				"de_DE": "Diese Klaue braucht dringendmal eine Maniküre.",
				"fr_FR": "undefined",
				"langUid": 1044,
				"zh_CN": "这个起老茧的爪子需要来一次彻底的美甲。",
				"ko_KR": "이 굳어진 손톱에는 매니큐어가 필요합니다.",
				"ja_JP": "このゴワゴワしたツメには手入れが必要だ。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 1750,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 101,
			"name": {
				"en_US": "Stout Backplate",
				"de_DE": "Dicke Panzerplatte",
				"langUid": 914,
				"zh_CN": "结实背甲",
				"ko_KR": "튼튼한 배갑",
				"ja_JP": "頑丈な背甲"
			},
			"description": {
				"en_US": "Impenetrable plate used by Behesloths to protect most of its body.",
				"de_DE": "Undurchdringbare Platte, welche die Behesloths schützt.",
				"fr_FR": "undefined",
				"langUid": 1045,
				"zh_CN": "巨树懒用来护体的坚固板甲。",
				"ko_KR": "베헤슬로스가 사용하는 뚫리지 않는 판금 갑옷으로, 몸 대부분을 보호해 줍니다.",
				"ja_JP": "ベヒースロスの体の大半を守る、鉄壁の装甲板。"
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 3500,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 102,
			"name": {
				"en_US": "Power Spinach",
				"de_DE": "Power Spinat",
				"langUid": 916,
				"zh_CN": "大力菠菜",
				"ko_KR": "파워 시금치",
				"ja_JP": "力のホウレンソウ"
			},
			"description": {
				"en_US": "A vegetable of mythical power. Greatly increases the flexibility of fellow plants.",
				"de_DE": "Ein Gemüse mit magischen Kräften. Kann sehr stark machen.",
				"fr_FR": "undefined",
				"langUid": 1046,
				"zh_CN": "具有神秘力量的蔬菜。大大提高了同类植物的适应性。",
				"ko_KR": "신화의 힘이 깃든 채소. 동료 식물의 유연성이 상당히 증가합니다.",
				"ja_JP": "神秘の力に溢れたホウレンソウ。周囲の植物の柔軟性が大きく上昇する言われている。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 2600,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 103,
			"name": {
				"en_US": "Living Bolt",
				"de_DE": "Lebender Blitz",
				"langUid": 918,
				"zh_CN": "流动的闪电",
				"ko_KR": "살아있는 번개",
				"ja_JP": "生きた電気"
			},
			"description": {
				"en_US": "A mass of electricity with something that some describe as a \"soul\".",
				"de_DE": "Eine Masse elektronischem Etwas, das manche wohl als \"Seele\" bezeichnen.",
				"fr_FR": "undefined",
				"langUid": 1047,
				"zh_CN": "电流的集合体，有些人把它称之为“灵魂”。",
				"ko_KR": "\"영혼\"이라 불리는 무언가로 이루어진 전기 덩어리입니다.",
				"ja_JP": "「魂」とも呼ばれる何かを内に秘めた電気のかたまり。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 3600,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 104,
			"name": {
				"en_US": "Metal Down",
				"de_DE": "Metalldaunen",
				"langUid": 920,
				"zh_CN": "金属重",
				"ko_KR": "금속 솜털",
				"ja_JP": "メタルダウン"
			},
			"description": {
				"en_US": "Are 100 gram of them as heavy as 100 gram of regular feathers? It's a mystery.",
				"de_DE": "Sind 100 Gramm hiervon genauso schwer wie 100 Gramm Federn?<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"langUid": 1048,
				"zh_CN": "100克金属和100克羽毛是否一样重？这是一个谜。<<A<<[CHANGED 2017/12/12]",
				"ko_KR": "이 솜털 100g이 일반 깃털의 100g과 같을까요? 알 수 없군요.<<A<<TODO 0.9.8",
				"ja_JP": "この物質100グラムと羽毛100グラムは同じ重さなのだろうか？謎だ。<<A<<[CHANGED 2017/12/11]"
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 2550,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 105,
			"name": {
				"en_US": "Plain Cube",
				"de_DE": "Einfacher Würfel",
				"langUid": 924,
				"zh_CN": "普通立方体",
				"ko_KR": "일반 큐브",
				"ja_JP": "ただのキューブ"
			},
			"description": {
				"en_US": "Perfectly rectangular shaped cube. There is nothing unusual about it.",
				"de_DE": "Ein perfekter Würfel in Würfelform. Nichts Ungewöhnliches lässt sich feststellen.",
				"fr_FR": "undefined",
				"langUid": 1049,
				"zh_CN": "完美的矩形立方体。没有什么不寻常的。",
				"ko_KR": "완벽한 직사각형 모양의 큐브입니다. 딱히 특별한 건 없군요.",
				"ja_JP": "完璧な形をした立方体だ。特筆することは何もない。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 2750,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 99,
			"name": {
				"en_US": "Glow Pear",
				"de_DE": "Glühende Birne",
				"langUid": 926,
				"zh_CN": "发光梨",
				"ko_KR": "빛나는 배",
				"ja_JP": "ヒカリナシ"
			},
			"description": {
				"en_US": "A glowing bulb in form of a pear. Yepp.",
				"de_DE": "Eine glühende Glühbirne in Form einer Birne. Ja.",
				"fr_FR": "undefined",
				"langUid": 1050,
				"zh_CN": "外形像梨一样的电灯。真的。",
				"ko_KR": "배 모양의 빛나는 전구입니다.",
				"ja_JP": "ナシの形をした白熱電球。本当ですよ。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 1450,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 12,
			"name": {
				"en_US": "Disc of Flora",
				"de_DE": "Faunascheibe",
				"langUid": 929,
				"zh_CN": "植物光盘",
				"ko_KR": "식물군 디스크",
				"ja_JP": "植物のディスク"
			},
			"description": {
				"en_US": "A truly perfect guide for the exquisite plant lover.",
				"de_DE": "Ein wahrhaft perfekter Führer für den exquisiten Pflanzenliebhaber.",
				"fr_FR": "undefined",
				"langUid": 930,
				"zh_CN": "对于那些狂热植物爱好者来说，这是一份非常完美的指南。",
				"ko_KR": "고상한 식물 애호가를 위한 정말 완벽한 안내서입니다.",
				"ja_JP": "植物愛好家には持ってこいの完璧な手引書。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 38,
			"name": {
				"en_US": "Azure Drop Shade",
				"de_DE": "Tropfschatten Azur",
				"fr_FR": "undefined",
				"zh_CN": "蓝滴证印",
				"ja_JP": "アズールドロップシェード",
				"ko_KR": "하늘색 물방울 셰이드",
				"langUid": 932
			},
			"description": {
				"en_US": "Grants passage to Grand Krys’kajo together with the Purple Bolt Shade.",
				"de_DE": "Gewährt zusammen mit dem Lila Blitzschatten Zugang zum Grand Grand Krys’kajo.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "和紫电一起开启通往大卡伊卡乔的道路。",
				"ja_JP": "パープルボルトシェードと合わせることで、\\c[3]クリュス・カーヨ大神殿\\c[0]への通行許可証となる。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "보라색 번개 셰이드와 함께 그랜드 크리스카조로 가는 길을 안내합니다.",
				"langUid": 933
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 30,
			"name": {
				"en_US": "Strawhat",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "草帽",
				"ja_JP": "ストローハット<<A<<[CHANGED 2017/08/03]",
				"langUid": 1614,
				"ko_KR": "밀짚모자"
			},
			"description": {
				"en_US": "This inconspicuous hat enables the wearer to find even the rarest materials.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "带着这顶草帽可以找到最为稀有的材料。",
				"ja_JP": "地味な帽子だが、装備すると希少な素材を見つけることができるようになる。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1615,
				"ko_KR": "이 눈에 띄지 않는 모자를 착용하면 가장 희귀한 물질도 찾아낼 수 있습니다."
			},
			"type": "EQUIP",
			"rarity": 4,
			"cost": 0,
			"level": 40,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 2,
				"defense": 5,
				"focus": 70
			},
			"properties": {
				"RANK_PLANTS": 2
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 61,
			"name": {
				"en_US": "Gaia Temple Pass",
				"de_DE": "Gaia Tempel Pass",
				"langUid": 947,
				"zh_CN": "盖亚神庙通行证",
				"ko_KR": "가이아 사원 통행증",
				"ja_JP": "ガイアの神殿の通行証"
			},
			"description": {
				"en_US": "Pass to provide access to the temple complex within \\v[area.jungle.name]",
				"de_DE": "Pass, der Zugang zum Tempelkomplex in \\v[area.jungle.name] gewährt.",
				"fr_FR": "undefined",
				"langUid": 948,
				"zh_CN": "前往神庙的通行证，复杂作用于\\v[area.jungle.name]内部。",
				"ko_KR": "\\v[area.jungle.name] 내 복합 사원에 들어갈 수 있는 통행증입니다",
				"ja_JP": "\\v[area.jungle.name]にある複合神殿への通行許可証。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 38,
			"name": {
				"en_US": "Prime Pistachios",
				"de_DE": "Riesenpistazien",
				"fr_FR": "undefined",
				"zh_CN": "最好的开心果",
				"ja_JP": "一級ピスタチオ",
				"ko_KR": "1등급 피스타치오",
				"langUid": 950
			},
			"description": {
				"en_US": "Surprisingly big variant of a tasty nut. Opening the shell is half of the fun!",
				"de_DE": "Große Variante einer köstlichen Nuss. Die Schale zu öffnen macht Laune!",
				"fr_FR": "undefined",
				"zh_CN": "出奇好吃的坚果。开壳也很有意思！",
				"ja_JP": "非常に奇形のおいしいナッツ。からを開けるのもその楽しみの1つ！",
				"ko_KR": "맛있는 견과류와는 놀랄 만큼 다릅니다. 껍질을 여는 게 재미의 반이죠!",
				"langUid": 1281
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 500,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 30,
			"stats": [
				"SHOCK-RES-3"
			],
			"noTrack": false,
			"foodSprite": "PISTACHIO"
		},
		{
			"order": 34,
			"name": {
				"en_US": "Salted Peanuts",
				"de_DE": "Gesalzene Erdnüsse",
				"fr_FR": "undefined",
				"zh_CN": "盐味花生",
				"ja_JP": "うす塩ピーナッツ",
				"ko_KR": "소금을 뿌린 땅콩",
				"langUid": 952
			},
			"description": {
				"en_US": "Small, tasty plant seeds that are popular as a relaxing snack.",
				"de_DE": "Kleine, schmackhafte Pflanzensamen die als Snack beliebt sind.",
				"fr_FR": "undefined",
				"zh_CN": "小而美味的植物果实，是一种流行的休闲小吃。",
				"ja_JP": "おやつとして人気の、おいしくて小さい植物の種。",
				"ko_KR": "작고 맛있는 식물의 씨앗이자 마음을 느긋하게 해주는 과자로도 인기가 있습니다.",
				"langUid": 1145
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 200,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 30,
			"stats": [
				"SHOCK-RES-2"
			],
			"noTrack": false,
			"foodSprite": "PEANUTS"
		},
		{
			"order": 35,
			"name": {
				"en_US": "Cup o' Coffee",
				"de_DE": "Tasse Kaffee",
				"fr_FR": "undefined",
				"zh_CN": "一杯咖啡",
				"ja_JP": "コーヒーカップ",
				"ko_KR": "커피 한 잔",
				"langUid": 954
			},
			"description": {
				"en_US": "A classic wake-up drink. Drink it black to also feel more mature!",
				"de_DE": "Klassischer Aufputscher. Schwarz wie die Nacht.",
				"fr_FR": "undefined",
				"zh_CN": "一款经典提神饮品。不加奶和糖喝起来很有成人的感觉！",
				"ja_JP": "眠気覚ましの定番の飲み物。ブラックで飲んで大人気分！",
				"ko_KR": "잠을 깨워주는 고전적인 음료. 블랙커피를 마시면 더욱 어른이 된 기분을 느낄 수 있습니다!",
				"langUid": 1146
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 200,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 30,
			"stats": [
				"WAVE-RES-2"
			],
			"noTrack": false,
			"foodSprite": "COFFEE"
		},
		{
			"order": 39,
			"name": {
				"en_US": "Energy Espresso",
				"de_DE": "Energy Espresso",
				"fr_FR": "undefined",
				"zh_CN": "能量特浓咖啡",
				"ja_JP": "エナジーエスプレッソ",
				"ko_KR": "에너지 에스프레소",
				"langUid": 956
			},
			"description": {
				"en_US": "Highly-concentrated coffee with a distinct taste. Will eliminate all sleepiness.",
				"de_DE": "Hochkonzentrierter Kaffe. Vernichtet jede Schläfrigkeit.",
				"fr_FR": "undefined",
				"zh_CN": "高度浓缩的咖啡，美妙的味道。将消除一切困意。",
				"ja_JP": "独特の味わいの高濃縮コーヒー。眠気なんてぶっ飛ぶ。",
				"ko_KR": "특유의 맛이 있는 고농축 커피. 잠을 달아나게 해줍니다.",
				"langUid": 1282
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 500,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 30,
			"stats": [
				"WAVE-RES-3"
			],
			"noTrack": false,
			"foodSprite": "ESPRESSO"
		},
		{
			"name": {
				"en_US": "Nifty Grey Shades",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "拉风墨镜",
				"ja_JP": "ニフティグレーシェード<<A<<[CHANGED 2017/08/03]",
				"langUid": 1903,
				"ko_KR": "멋진 회색 셰이드"
			},
			"description": {
				"en_US": "Highly advanced, sharp looking shades. Don't throw them, though.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "高科技的V字形拉风墨镜。可别拿来当回旋镖。",
				"ja_JP": "最先端の鋭い見た目のサングラス。でも投げないでね。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1904,
				"ko_KR": "고성능의 날카로운 셰이드. 버리지는 마세요."
			},
			"type": "EQUIP",
			"cost": 36001,
			"level": 38,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1.1
				],
				"attack": 4,
				"defense": 4,
				"focus": 69
			},
			"properties": {
				"BREAK_DMG": 1.1,
				"ASSAULT": 1.1
			},
			"rarity": 2,
			"order": 21,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Red Bandana",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "红色头巾",
				"ja_JP": "レッドバンダナ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1905,
				"ko_KR": "빨간색 반다나"
			},
			"description": {
				"en_US": "A rather tattered red Bandana once worn by a wandering warrior.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一件有些破烂的红色头巾，曾经为一位流浪的战士所穿。",
				"ja_JP": "流浪の戦士が付けていたぼろぼろの赤いバンダナ。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1906,
				"ko_KR": "돌아다니던 전사가 한 번 착용했던 낡고 헤진 빨간색 반다나입니다."
			},
			"type": "EQUIP",
			"cost": 32450,
			"level": 37,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"defense": 12,
				"focus": 64
			},
			"properties": {
				"PERFECT_GUARD_WINDOW": 1.1,
				"GUARD_SP": 1.1
			},
			"rarity": 2,
			"order": 20,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Electrician's Cap",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "电工帽",
				"ja_JP": "電気技師の帽子<<A<<[CHANGED 2017/08/03]",
				"langUid": 1771,
				"ko_KR": "전기 기술자의 모자"
			},
			"description": {
				"en_US": "Construction helmet that creates a static field which disperses incoming voltage.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "建筑工用的头盔，可以创造出一个静电场来分散电击。",
				"ja_JP": "静電場を発生することで外部からの電圧を遮断する建設作業用ヘルメット。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1772,
				"ko_KR": "들어오는 전압을 흩어지게 하는 전기장을 만드는 건설 헬멧입니다."
			},
			"type": "EQUIP",
			"cost": 52220,
			"level": 45,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1.25,
					1
				],
				"defense": 60,
				"focus": 44
			},
			"properties": {},
			"rarity": 2,
			"order": 23,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Faedora",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "软呢帽",
				"ja_JP": "フェドーラ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1773,
				"ko_KR": "중절모"
			},
			"description": {
				"en_US": "A classic hat, popular in cities. This version, though, emits a strange aura.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一款经典的帽子，在城市中非常流行。不过这种款式总给人奇怪的感觉。",
				"ja_JP": "街中では人気の中折れ帽。ただ、この帽子は奇妙なオーラを放っている。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1774,
				"ko_KR": "도시에서 유행하는 전형적인 모자. 하지만 이번 버전에서는 특이한 아우라를 내뿜습니다."
			},
			"type": "EQUIP",
			"cost": 55990,
			"level": 46,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 6,
				"defense": 9,
				"focus": 93
			},
			"properties": {
				"AIMING_MOVEMENT": 1.1,
				"KNOCKBACK": 1.15
			},
			"rarity": 2,
			"order": 24,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Mystic Mohawk",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "神秘莫霍克",
				"ja_JP": "ミスティックモヒカン<<A<<[CHANGED 2017/08/03]",
				"langUid": 1775,
				"ko_KR": "신비주의 모호크족"
			},
			"description": {
				"en_US": "Headdress made by a famous Shad-Designer, modelled after a popular hairstyle.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "由著名的沙德设计师制作的头饰，可以模仿流行的发型。",
				"ja_JP": "有名なシャッドのデザイナーが作った、人気のヘアスタイルをモデルにした被り物。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1776,
				"ko_KR": "유명한 샤드 디자이너가 유행하던 헤어스타일을 모델로 삼아 만든 머리 장식입니다."
			},
			"type": "EQUIP",
			"cost": 59150,
			"level": 47,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1.1
				],
				"hp": 33,
				"attack": 23,
				"defense": 3,
				"focus": 83
			},
			"properties": {
				"MELEE_DMG": 1.1
			},
			"rarity": 2,
			"order": 25,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 26,
			"name": {
				"en_US": "Hunter's Bolt",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "猎人钉枪",
				"ja_JP": "ハンターボルト<<A<<[CHANGED 2017/08/03]",
				"langUid": 1843,
				"ko_KR": "사냥꾼의 볼트"
			},
			"description": {
				"en_US": "Ranged weapon with high-precision, used to bring down game with few attacks.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "高精度的远程武器，仅需数发就能干掉猎物。",
				"ja_JP": "数発で獲物を撃ち落とす目的で作られた、高い命中度を誇る遠距離武器。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1844,
				"ko_KR": "고정밀의 중거리 무기로, 단 몇 발로 적을 몰살시킬 수 있습니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 31313,
			"level": 37,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 58,
				"focus": 18
			},
			"properties": {
				"AIM_SPEED": 1.1,
				"RANGED_DMG": 1.1
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 31,
			"name": {
				"en_US": "Lawkeeper's Fist",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "执法者拳套",
				"ja_JP": "法の番人の拳<<A<<[CHANGED 2017/08/03]",
				"langUid": 1693,
				"ko_KR": "법 수호자의 주먹"
			},
			"description": {
				"en_US": "Highly advanced gauntlet associated with hands-on approaches in law enforcement.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "极其先进的拳套，让法律与罪犯进行亲密接触。",
				"ja_JP": "腕力で法律を執行することを目的として作られた、最新鋭のガントレット。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1694,
				"ko_KR": "직접 법의 심판을 내릴 수 있는 고급 장갑입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 54904,
			"level": 46,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 50,
				"defense": 58
			},
			"properties": {
				"GUARD_STRENGTH": 1.25,
				"SPIKE_DMG": 1.25
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 30,
			"name": {
				"en_US": "Aehre",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "埃赫尔",
				"ja_JP": "エーフル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1817,
				"ko_KR": "이삭"
			},
			"description": {
				"en_US": "According to a translator it means \"honor\". In any case it keeps the wielder healthy.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "据一名翻译说，它意味着“荣誉”。总之，这件装备能守护穿戴者。",
				"ja_JP": "翻訳者によると「栄誉」という意味らしい。どんな時でも使い手の健康を守るという。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1818,
				"ko_KR": "번역하면 \"명예\"라는 뜻입니다. 어떤 경우에서도 무기를 휘두르는 사람이 다치지 않게 합니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 51700,
			"level": 45,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 266,
				"attack": 65,
				"defense": 13
			},
			"properties": {
				"ASSAULT": 1.1,
				"HP_REGEN": 1.03
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 29,
			"name": {
				"en_US": "Twitching Slicer",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "扭曲之刃<<A<<[CHANGED 2017/07/01]",
				"ja_JP": "ツイッチスライサー<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "움직이는 절단기",
				"langUid": 986
			},
			"description": {
				"en_US": "Vicious looking weapon that always seems to be restless and unpredictable.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一把形状可怕的武器，看上去非常吓人。<<A<<[CHANGED 2017/07/01]",
				"ja_JP": "残忍な見た目をしたこの武器の動きは止まることがなく、また予測不可能。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "항상 가만히 있지 못해 행동을 예측할 수 없는 잔인한 무기입니다.",
				"langUid": 1239
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 44,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 77,
				"defense": 13,
				"focus": 13
			},
			"properties": {
				"AIM_STABILITY": 0.85,
				"GUARD_STRENGTH": 0.75,
				"ASSAULT": 1.35
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"order": 27,
			"name": {
				"en_US": "Sunset Claw",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "日落爪",
				"ja_JP": "サンセットクロー<<A<<[CHANGED 2017/08/03]",
				"langUid": 1845,
				"ko_KR": "해 질 녘의 손톱"
			},
			"description": {
				"en_US": "This savage tool was inspired by the weapons of nature and sharpens your instincts.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "这件野蛮工具的灵感来源于大自然，它可以提高你的本能。",
				"ja_JP": "この野蛮な武器は自然界の武器からヒントを得ており、使う者の本能を活性化させる。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1846,
				"ko_KR": "이 잔인한 도구는 자연의 무기를 기반으로 하며, 본능적인 감각을 더욱 예민하게 만듭니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 35800,
			"level": 38,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 51,
				"defense": 27
			},
			"properties": {
				"MELEE_DMG": 1.1,
				"GUARD_SP": 1.25
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 32,
			"name": {
				"en_US": "Sneaky Shiv",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "隐刺",
				"ja_JP": "スニーキーナイフ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1699,
				"ko_KR": "교활한 칼"
			},
			"description": {
				"en_US": "Small weapon that is easy to hide, especially in an opponent's weak-spots.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "小型武器，非常容易隐藏，针对敌人弱点进攻十分有效。",
				"ja_JP": "小さな武器なので、いろいろなところに滑り込まして携帯できる。特に敵の急所に滑り込まそう。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1700,
				"ko_KR": "쉽게 숨길 수 있는 작은 무기입니다. 특히 상대방의 약한 곳에 말이죠."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 58999,
			"level": 47,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 73,
				"focus": 39
			},
			"properties": {
				"CRITICAL_DMG": 1.5
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Ramming Shell",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "撞角",
				"ja_JP": "ラミングシェル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1893,
				"ko_KR": "단단한 껍질"
			},
			"description": {
				"en_US": "Ferocious armor made from the hardest parts of wild Bovines.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "用野生公牛身上最坚硬的部分制作而成的惊人盔甲。",
				"ja_JP": "ウシ系のモンスターの体の一番硬い部分のみを使って作られた凶悪なよろい。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1894,
				"ko_KR": "야생 들소의 가장 단단한 부분으로 만든 굉장한 갑옷입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 36630,
			"level": 38,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 478,
				"defense": 31
			},
			"properties": {
				"GUARD_STRENGTH": 1.1,
				"SPIKE_DMG": 1.5
			},
			"order": 19,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Survival Plate",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "生存板甲",
				"ja_JP": "サバイバルプレート<<A<<[CHANGED 2017/08/03]",
				"langUid": 1807,
				"ko_KR": "생존 판금 갑옷"
			},
			"description": {
				"en_US": "Heavy plate with built-in life support system that protects against the elements.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "重型板甲，内置维生系统，提供了一定程度的元素伤害防护。",
				"ja_JP": "エレメントから体を守る生命保護サポートシステムを内蔵した、重い装甲。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1808,
				"ko_KR": "내부에 생명 지원 시스템이 장착되어 속성으로부터 보호해주는 무거운 판금 갑옷입니다. "
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 56200,
			"level": 46,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1.1,
					1.1,
					1.1,
					1.1
				],
				"hp": 404,
				"defense": 68
			},
			"properties": {
				"STUN_THRESHOLD": 1.02,
				"DASH_INVINC": 0.75
			},
			"order": 22,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Rootweave",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "根织衣",
				"ja_JP": "ルートウィーヴ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1809,
				"ko_KR": "뿌리 옷"
			},
			"description": {
				"en_US": "Weird looking clothes made from a mass of finely intertwined roots.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "看起来很奇怪的衣服，由许多植物根部巧妙编制而成。",
				"ja_JP": "綿密に絡み合った大量の根っこで作られた奇妙な服装。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1810,
				"ko_KR": "잘 꼬아진 뿌리로 만든 특이한 모양의 의복입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 59851,
			"level": 47,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 876,
				"defense": 24
			},
			"properties": {
				"COND_HEALING": 1.35,
				"HP_REGEN": 1.05
			},
			"order": 23,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Petal Cloak",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "花瓣斗篷",
				"ja_JP": "ペタルクローク<<A<<[CHANGED 2017/08/03]",
				"langUid": 1895,
				"ko_KR": "꽃잎 망토"
			},
			"description": {
				"en_US": "Countless petals that somehow stick together naturally. Still emits a strong lifeforce.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "无数的花瓣以某种方式自然地接合在一起。现在仍然展现出强大的生命力。",
				"ja_JP": "無数の花びらが何かの力で自然にくっついてできたもの。未だに強力な生命力を宿している。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1896,
				"ko_KR": "셀 수 없이 많은 꽃잎이 자연적으로 붙어있는 망토. 강한 생명력을 내뿜습니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 32700,
			"level": 37,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					0.75,
					1,
					1,
					1.1
				],
				"hp": 636,
				"defense": 13
			},
			"properties": {
				"HP_REGEN": 1.07
			},
			"order": 18,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Loose Trenchcoat",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "宽松的大衣",
				"ja_JP": "だぶだぶのトレンチコート<<A<<[CHANGED 2017/08/03]",
				"langUid": 1813,
				"ko_KR": "헐렁한 트렌치코트"
			},
			"description": {
				"en_US": "Always looks slightly too big for your body. Still a favorite of clever investigators.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "穿上总是感觉大了一号。调查员的最爱。",
				"ja_JP": "なぜか体のサイズにぴったりと合うことは絶対にない。頭のキレる捜査官のお気に入り。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1814,
				"ko_KR": "당신의 몸에는 항상 너무 커 보입니다. 조사원들은 여전히 이 옷을 선호합니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 52510,
			"level": 45,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 585,
				"defense": 21,
				"focus": 25
			},
			"properties": {
				"CRITICAL_DMG": 1.25
			},
			"order": 21,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 19,
			"name": {
				"en_US": "Stable Footguard",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "稳固的绑腿",
				"ja_JP": "バランスフットガード<<A<<[CHANGED 2017/08/03]",
				"langUid": 1871,
				"ko_KR": "안정적인 발 보호대"
			},
			"description": {
				"en_US": "They protect both the feet and lower legs. The natural foes of kicks to the shin.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "用以保护脚和小腿部分。可以有效防御剪刀脚。",
				"ja_JP": "足を危険から守ってくれる。すねを狙ってくる相手にとっての天敵。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1872,
				"ko_KR": "발과 다리 아래쪽은 보호합니다. 정강이가 걷어차이는 걸 막아줍니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 35760,
			"level": 38,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 420,
				"defense": 28,
				"focus": 9
			},
			"properties": {
				"STUN_THRESHOLD": 1.05,
				"GUARD_STRENGTH": 1.1
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 23,
			"name": {
				"en_US": "Hydraulic Anchors",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "液压锚",
				"ja_JP": "ハイドロアンカー<<A<<[CHANGED 2017/08/03]",
				"langUid": 1731,
				"ko_KR": "수압 닻"
			},
			"description": {
				"en_US": "Heavy boots that are still very mobile thanks to internal hydraulics.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "重型靴，因内部液压系统，故具备极高的移动性。",
				"ja_JP": "とても重いブーツだが、内部の水圧機構のおかげで素早く動くことができる。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1732,
				"ko_KR": "내부 수압 덕분에 아직 빠르게 움직일 수 있는 무거운 부츠입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 59460,
			"level": 47,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 444,
				"defense": 44,
				"focus": 22
			},
			"properties": {
				"AIMING_MOVEMENT": 1.1,
				"STUN_THRESHOLD": 1.05
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 18,
			"name": {
				"en_US": "Shinkickers",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "剪刀脚",
				"ja_JP": "シンキッカー<<A<<[CHANGED 2017/08/03]",
				"langUid": 1873,
				"ko_KR": "정강이 키커"
			},
			"description": {
				"en_US": "Reinforced combat boots for martial artists that prefer pragmatism over honor.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "为那些只讲胜负不论荣誉的武术家准备的强化战靴。",
				"ja_JP": "スネを蹴るためのブーツ。名誉よりも結果を重視する武道家によく適している。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1874,
				"ko_KR": "명예보다는 실용주의를 따르는 무술인을 위해 강화된 전투용 부츠입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 32050,
			"level": 37,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 256,
				"attack": 12,
				"defense": 14,
				"focus": 26
			},
			"properties": {
				"MELEE_DMG": 1.1
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 22,
			"name": {
				"en_US": "Urban Sneakers",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "城市运动鞋",
				"ja_JP": "アーバンスニーカー<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "최신 운동화",
				"langUid": 1735
			},
			"description": {
				"en_US": "Classy looking shoes of the highest quality and extremely comfy to boot!",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "看起来很有型的靴子，品质优异，极为舒适！",
				"ja_JP": "おしゃれな見た目の最高級の靴。おまけに履き心地抜群！<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "매우 편안하며 성능도 좋은 고급스러운 신발입니다.",
				"langUid": 1736
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 55311,
			"level": 46,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 529,
				"defense": 17,
				"focus": 38
			},
			"properties": {
				"DASH_INVINC": 1.25,
				"CROSS_COUNTER": 1.15
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 21,
			"name": {
				"en_US": "Pathfinders",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "探路者",
				"ja_JP": "パスファインダー<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "개척자",
				"langUid": 1737
			},
			"description": {
				"en_US": "Solid boots, made to explore even the deepest part of an unknown world.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "坚实的靴子，适合于探索未知世界的最深处。",
				"ja_JP": "未知の世界を隅から隅までを探索したい者のための頑丈なブーツ。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "알려지지 않은 세상의 가장 깊은 곳도 탐험할 수 있는 튼튼한 부츠입니다.",
				"langUid": 1738
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 51360,
			"level": 45,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1.1
				],
				"hp": 555,
				"defense": 19,
				"focus": 30
			},
			"properties": {
				"COND_HEALING": 1.35
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 106,
			"name": {
				"en_US": "Sea Disc",
				"de_DE": "Sea Disc",
				"langUid": 1039,
				"zh_CN": "海洋光盘",
				"ko_KR": "바다 디스크",
				"ja_JP": "海のディスク"
			},
			"description": {
				"en_US": "Sadly you got no means to access the mass of information stored on this weird object.",
				"de_DE": "Enthält sicherlich massenhaft Daten, auf die man leider keinen Zugriff hat.",
				"fr_FR": "undefined",
				"langUid": 1051,
				"zh_CN": "可惜你无法访问这个奇异物体中储存的大量信息。",
				"ko_KR": "아쉽지만, 이 특이한 물체에 저장된 대량의 정보를 접할 방법은 없습니다.",
				"ja_JP": "悲しいことに、この奇妙な物質の内部に保存された膨大な量の情報を取り出す術はない。"
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 2800,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 64,
			"name": {
				"en_US": "Food Temp #1",
				"de_DE": "",
				"langUid": 1059,
				"zh_CN": "临时食物#1",
				"ko_KR": "임시 식량 #1",
				"ja_JP": "臨時食料 #1"
			},
			"description": {
				"en_US": "Will turn into something tasty in the future! #notabug",
				"de_DE": "Wird irgendwann etwas köstliches werden! #notabug",
				"fr_FR": "undefined",
				"langUid": 1074,
				"zh_CN": "将来会变成美味的食物！#notabug",
				"ko_KR": "나중에는 무언가 맛있는 거로 변할 겁니다! #벌레 아님",
				"ja_JP": "将来何かおいしい食料になるかも！ #バグじゃないよ"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 65,
			"name": {
				"en_US": "Food Temp #2",
				"de_DE": "",
				"langUid": 1061,
				"zh_CN": "临时食物#2",
				"ko_KR": "임시 식량 #2",
				"ja_JP": "臨時食料 #2"
			},
			"description": {
				"en_US": "Will turn into something tasty in the future! #notabug",
				"de_DE": "Wird irgendwann etwas köstliches werden! #notabug",
				"fr_FR": "undefined",
				"langUid": 1082,
				"zh_CN": "将来会变成美味的食物！#notabug",
				"ko_KR": "나중에는 무언가 맛있는 거로 변할 겁니다! #벌레 아님",
				"ja_JP": "将来何かおいしい食料になるかも！ #バグじゃないよ"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 66,
			"name": {
				"en_US": "Food Temp #3",
				"de_DE": "",
				"langUid": 1063,
				"zh_CN": "临时食物#3",
				"ko_KR": "임시 식량 #3",
				"ja_JP": "臨時食料 #3"
			},
			"description": {
				"en_US": "Will turn into something tasty in the future! #notabug",
				"de_DE": "Wird irgendwann etwas köstliches werden! #notabug",
				"fr_FR": "undefined",
				"langUid": 1083,
				"zh_CN": "将来会变成美味的食物！#notabug",
				"ko_KR": "나중에는 무언가 맛있는 거로 변할 겁니다! #벌레 아님",
				"ja_JP": "将来何かおいしい食料になるかも！ #バグじゃないよ"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 67,
			"name": {
				"en_US": "Food Temp #4",
				"de_DE": "",
				"langUid": 1065,
				"zh_CN": "临时食物#4",
				"ko_KR": "임시 식량 #4",
				"ja_JP": "臨時食料 #4"
			},
			"description": {
				"en_US": "Will turn into something tasty in the future! #notabug",
				"de_DE": "Wird irgendwann etwas köstliches werden!#notabug",
				"fr_FR": "undefined",
				"langUid": 1077,
				"zh_CN": "将来会变成美味的食物！#notabug",
				"ko_KR": "나중에는 무언가 맛있는 거로 변할 겁니다! #벌레 아님",
				"ja_JP": "将来何かおいしい食料になるかも！ #バグじゃないよ"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 68,
			"name": {
				"en_US": "So'najiz Key",
				"de_DE": "So'najiz Schlüssel",
				"langUid": 1069,
				"zh_CN": "索纳吉钥匙",
				"ko_KR": "소나지즈 열쇠",
				"ja_JP": "ソー・ナイーゾの鍵"
			},
			"description": {
				"en_US": "A regular key for So'najiz Temple.",
				"de_DE": "Gewöhnlicher So'najiz Schlüssel",
				"fr_FR": "undefined",
				"zh_CN": "一把索纳吉神庙的普通钥匙。",
				"langUid": 1209,
				"ko_KR": "소나지즈 사원의 기본 열쇠입니다.",
				"ja_JP": "ソー・ナイーゾ神殿で使う普通の鍵。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 69,
			"name": {
				"en_US": "Jack's Flame",
				"de_DE": "Jacks Flamme",
				"langUid": 1071,
				"zh_CN": "南瓜火",
				"ko_KR": "잭의 불꽃",
				"ja_JP": "ジャックの炎"
			},
			"description": {
				"en_US": "A cold flame which naturally forms inside \\c[3]\\v[combat.name.jungle/pumpkin]\\c[0]. It looks nice.",
				"de_DE": "Eine kalte Flamme, welche natürliche in einem \\c[3]\\v[combat.name.jungle/pumpkin]\\c[0] wächst. Sieht hübsch aus.",
				"fr_FR": "undefined",
				"zh_CN": "一股在\\c[3]\\v[combat.name.jungle/pumpkin]\\c[0]体内燃烧的冷焰。看起来很不错。",
				"langUid": 1192,
				"ko_KR": "\\c[3]\\v[combat.name.jungle/pumpkin]\\c[0] 내부에서 자연적으로 형성되는 차가운 불꽃입니다. 멋지군요.",
				"ja_JP": "\\c[3]\\v[combat.name.jungle/pumpkin]\\c[0]の内部で生成される冷たい炎。かっこいい。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 51,
			"name": {
				"en_US": "Aged Travelguide",
				"de_DE": "Uralter Reiseführer",
				"langUid": 1084,
				"zh_CN": "远古旅游指南",
				"ko_KR": "오래된 여행 가이드",
				"ja_JP": "古い旅行ガイド"
			},
			"description": {
				"en_US": "An ancient guide to important Ancient places was engraved into this old stone.",
				"de_DE": "Ein alter Reiseführer zu altertümlichen Orten wurde in diesen alten Stein gehauen.",
				"fr_FR": "undefined",
				"langUid": 1182,
				"zh_CN": "这块石头上刻着通往先祖重要地点的古代标识。",
				"ko_KR": "중요한 고대 장소의 가이드, 이 오래된 바위 아래 잠들다.",
				"ja_JP": "この古い石には、古代人の手により、古代の名所のガイドが彫り込まれている。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 51,
			"name": {
				"en_US": "Galaxy Spiral Drill",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "银河螺旋钻",
				"ja_JP": "ギャラクシードリル<<A<<[CHANGED 2017/08/03]",
				"langUid": 1502,
				"ko_KR": "은하 나선 드릴"
			},
			"description": {
				"en_US": "This weapon holds the power of a small micro-cosmos inside itself.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "这把武器里蕴含着小宇宙的力量。",
				"ja_JP": "この武器の内部には小宇宙自体の力が込められている。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1503,
				"ko_KR": "내부에 초미세 은하의 힘이 깃들어 있습니다."
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 51,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 200,
				"attack": 65,
				"focus": 30
			},
			"properties": {
				"DROP_CHANCE": 1.4
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 52,
			"name": {
				"en_US": "Old Man's Drill",
				"de_DE": "Drill des Alten",
				"langUid": 1089,
				"zh_CN": "老人的钻头",
				"ko_KR": "노인의 드릴",
				"ja_JP": "老人のドリル"
			},
			"description": {
				"en_US": "It seems old and used but the power inside it unimaginable. ",
				"de_DE": "Es scheint alt zu sein, aber seine Kraft sollte nicht unterschätzt werden.",
				"fr_FR": "undefined",
				"langUid": 1121,
				"zh_CN": "看起来很老，并且被使用过，内部具有难以想象的力量。",
				"ko_KR": "오래되어 낡은 것 같지만 그 위력은 상상할 수 없습니다.",
				"ja_JP": "使い古されたように見えるが、内部に込められた力は測定不可能。"
			},
			"type": "EQUIP",
			"rarity": 4,
			"cost": 0,
			"level": 1,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 100,
				"attack": 35,
				"focus": 15
			},
			"properties": {
				"XP_ZERO": 2,
				"DROP_CHANCE": 1.5
			},
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 29,
			"name": {
				"en_US": "Blood Zircon",
				"de_DE": "Blut Zirkon",
				"langUid": 1099,
				"zh_CN": "血锆石",
				"ko_KR": "붉은색 지르콘",
				"ja_JP": "ブラッドジルコン"
			},
			"description": {
				"en_US": "This gem gets its name from the dark red liquid that swirls inside it.",
				"de_DE": "Dieses Juwel hat den Namen von der roten Flüssigkeit in seinem Inneren.",
				"fr_FR": "undefined",
				"langUid": 1100,
				"zh_CN": "这块宝石因内部旋转着的黑红色液体而得名。",
				"ko_KR": "안에 소용돌이치는 어두운 붉은색 액체에서 이 보석의 이름을 따왔습니다.",
				"ja_JP": "宝石内部で渦巻く赤黒い液体がその名前の由来。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 115,
			"name": {
				"en_US": "Infinite Gem",
				"de_DE": "Unendliches Juwel",
				"langUid": 1101,
				"zh_CN": "无限宝石",
				"ko_KR": "무한의 보석",
				"ja_JP": "インフィニットジェム"
			},
			"description": {
				"en_US": "Created centuries ago by a force as strong as the big bang.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "几个世纪以前，一股如宇宙大爆炸般强大的力量创造了它。",
				"ja_JP": "ビッグバンと同等の力によって、何世紀も前に創られた。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1375,
				"ko_KR": "우주 대폭발만큼이나 강력한 힘으로 수 세기 전 만들어졌습니다."
			},
			"type": "TRADE",
			"rarity": 3,
			"cost": 0,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 10151,
			"name": {
				"en_US": "King's Ring",
				"de_DE": "Königs Ring",
				"langUid": 1106,
				"zh_CN": "国王的指环",
				"ko_KR": "왕의 반지",
				"ja_JP": "王の指輪"
			},
			"description": {
				"en_US": "It took 10 years to make this ring and is only bestowed on worthy rulers.",
				"de_DE": "War 10 Jahre in der Mache und ist bestimmt für würdige Herrscher.",
				"fr_FR": "undefined",
				"langUid": 1110,
				"zh_CN": "这枚戒指花了十年的时间来打造，只赠与相称的统治者。",
				"ko_KR": "이 반지를 만드는 데 10년이 걸렸으며, 훌륭한 통치자에게만 수여됩니다.",
				"ja_JP": "作るのに10年を費やしたというこの指輪は、ふさわしい支配者にのみ与えられるという。"
			},
			"type": "TRADE",
			"rarity": 3,
			"cost": 0,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 34,
			"name": {
				"en_US": "Golden Revolver",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "黄金左轮",
				"ja_JP": "ゴールデンリボルバー<<A<<[CHANGED 2017/08/03]",
				"langUid": 1701,
				"ko_KR": "황금 리볼버"
			},
			"description": {
				"en_US": "Something is engraved here: \"It's \\v[misc.time]\". Whatever that means.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "上面刻着一句话：“\\v[misc.time]已到。”不知道什么意思。",
				"ja_JP": "何かが刻まれている。「現在\\v[misc.time]。」どういう意味だろう。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1702,
				"ko_KR": "\"\\v[misc.time]이다.\"라고 새겨져 있습니다. 무슨 뜻인지는 모르겠지만요."
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 50,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 88,
				"focus": 36
			},
			"properties": {
				"AIM_SPEED": 1.2,
				"AIMING_MOVEMENT": 1.2
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 27,
			"name": {
				"en_US": "Bandit's Scarf",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "强盗的围巾",
				"ja_JP": "バンディットスカーフ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1779,
				"ko_KR": "도적의 스카프"
			},
			"description": {
				"en_US": "Once owned by an eastern prince it's now old and lost all color.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "曾经为东方的一位王子所拥有，现已十分老旧且失去了颜色。",
				"ja_JP": "東洋の王子が身に着けていたというこのスカーフも今はぼろぼろで、色も失われてしまった。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1780,
				"ko_KR": "한때 동쪽 왕자의 것이었지만, 이젠 낡고 빛이 바랬습니다."
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 48,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 20,
				"defense": 4,
				"focus": 91
			},
			"properties": {
				"MONEY_PLUS": 1.25
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 28,
			"name": {
				"en_US": "Burglars Rope",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "盗贼绳",
				"ja_JP": "バーグラーロープ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1618,
				"ko_KR": "강도의 밧줄"
			},
			"description": {
				"en_US": "According to lore wrapping this around your head will bring you fortune.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "据说把它套在你的头上，就能带来财富。",
				"ja_JP": "伝説によれば、これを頭部に巻き付けると幸運を引き寄せるという。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1619,
				"ko_KR": "전해지는 이야기에 따르면 이걸 머리에 감으면 행운을 가져다준다고 합니다."
			},
			"type": "EQUIP",
			"rarity": 4,
			"cost": 0,
			"level": 1,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				]
			},
			"properties": {
				"XP_ZERO": 2,
				"MONEY_PLUS": 1.5
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 37,
			"name": {
				"en_US": "Excalibro",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "咖喱棒",
				"ja_JP": "エクスカリブロ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1490,
				"ko_KR": "엑스칼리브로"
			},
			"description": {
				"en_US": "Mass-market knockoff of a legendary weapon. It promises victory, but...",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "批量制造的山寨货，原型是一把传奇宝剑。",
				"ja_JP": "伝説の武器をベースに大量生産した模造品。勝利を約束してくれる、はずだが…<<A<<[CHANGED 2017/08/03]",
				"langUid": 1491,
				"ko_KR": "전설적인 무기의 대량 판매용 복제품입니다. 이걸로 이길 수 있다지만 과연..."
			},
			"type": "EQUIP",
			"rarity": 4,
			"cost": 2,
			"level": 47,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 1
			},
			"properties": {
				"XP_ZERO": 2,
				"DROP_CHANCE": 0.5,
				"MONEY_PLUS": 0.5
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 40,
			"name": {
				"en_US": "Snack Mix",
				"de_DE": "Snack Mix",
				"fr_FR": "undefined",
				"zh_CN": "混合小吃袋",
				"ja_JP": "ミックススナック",
				"ko_KR": "과자 모음",
				"langUid": 1125
			},
			"description": {
				"en_US": "A small but well mixed package of different snacks for handfood on the go.",
				"de_DE": "Gut für Zwischendurch. Könnte Spuren von Nüssen enthalten.",
				"fr_FR": "undefined",
				"zh_CN": "一小袋种类齐全的小吃，适合边走边吃。",
				"ja_JP": "小さいが、バラエティー豊かなスナックの詰め合わせ。出先での携帯食に最適。",
				"ko_KR": "끊임없이 돌아다니는 동안 손에 들고 먹을 수 있는 작은 과자 모음입니다.",
				"langUid": 1283
			},
			"type": "CONS",
			"rarity": 2,
			"cost": 350,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 30,
			"stats": [
				"HEAT-RES-1",
				"COLD-RES-1",
				"SHOCK-RES-1",
				"WAVE-RES-1"
			],
			"noTrack": false,
			"foodSprite": "PEANUTS"
		},
		{
			"order": 35,
			"name": {
				"en_US": "Rough Branch",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "粗糙的枝干",
				"ja_JP": "ラフブランチ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1492,
				"ko_KR": "거친 나뭇가지"
			},
			"description": {
				"en_US": "It's a branch from a tree! Truly the treasure of legends.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "这是一支树干！绝对是传说中的神器啊！",
				"ja_JP": "木の枝だ！これぞ伝説の秘宝。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1493,
				"ko_KR": "나뭇가지입니다! 진정한 전설의 보물이죠."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 2,
			"level": 41,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					0.75,
					1,
					1,
					1.1
				],
				"hp": 43,
				"attack": 20,
				"defense": 5
			},
			"properties": {
				"KNOCKBACK": 1.15
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 36,
			"name": {
				"en_US": "Bigger Stick",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "巨棍",
				"ja_JP": "ビッグスティック<<A<<[CHANGED 2017/08/03]",
				"langUid": 1703,
				"ko_KR": "큰 막대기"
			},
			"description": {
				"en_US": "Large weapon of massive size. It is very huge and packs an immensely gigantic punch.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "体型巨大的武器，打击效果惊人。",
				"ja_JP": "巨大な武器。ものすごい大きさで、ケタ外れの強力な衝撃を繰り出す。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1704,
				"ko_KR": "정말 거대한 크기의 무기입니다. 정말 거대해서 상대방에게도 거대한 타격을 주죠."
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 51,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					0.75,
					1,
					1,
					1.1
				],
				"hp": 166,
				"attack": 88,
				"defense": 24
			},
			"properties": {
				"KNOCKBACK": 1.75,
				"DASH_INVINC": 0.75
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 117,
			"name": {
				"en_US": "Goddess Plume",
				"de_DE": "Göttliche Feder",
				"fr_FR": "undefined",
				"zh_CN": "女神羽",
				"ja_JP": "女神の羽根飾り",
				"langUid": 1131,
				"ko_KR": "여신의 깃털"
			},
			"description": {
				"en_US": "plapla VP-reference",
				"de_DE": "",
				"fr_FR": "undefined",
				"zh_CN": "plapla VP-reference",
				"ja_JP": "VPに関する情報。",
				"langUid": 1171,
				"ko_KR": "plapla VP-reference"
			},
			"type": "TRADE",
			"rarity": 3,
			"cost": 0,
			"level": 1,
			"icon": "item-trade",
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"order": 30,
			"name": {
				"en_US": "Cold Platter",
				"de_DE": "Kalter Teller",
				"fr_FR": "undefined",
				"zh_CN": "冷盘杂烩",
				"ja_JP": "冷えた大皿料理",
				"ko_KR": "차가운 모둠 요리",
				"langUid": 1137
			},
			"description": {
				"en_US": "A great variety of dishes, served cold on a large plate. \\c[1]Slow\\c[0].",
				"de_DE": "Eine große Auswahl kleiner Speisen, kalt serviert auf einem großen Teller.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "美食大杂烩，冷盘盛装。\\c[1]缓慢\\c[0]。<<A<<[CHANGED 2017/07/07]",
				"ja_JP": "大きな皿の上に盛り付けられた、様々な冷製料理。使用には\\c[1]時間がかかる\\c[0]。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "거대한 접시 위에 차갑게 제공되는 다양한 음식입니다. \\c[1]느려집니다\\c[0].<<C<<Slow affects opponents or to oneself who consumes this item?<<A<<[CHANGED 2017/07/21]",
				"langUid": 1284
			},
			"type": "CONS",
			"rarity": 2,
			"cost": 750,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 2,
			"time": 35,
			"stats": [
				"HP-1",
				"ATTACK-1",
				"DEFENSE-1",
				"FOCUS-1"
			],
			"noTrack": false,
			"foodSprite": "COLD_PLATE"
		},
		{
			"order": 31,
			"name": {
				"en_US": "Full Course",
				"de_DE": "Vollständiges Menü",
				"fr_FR": "undefined",
				"zh_CN": "晚宴",
				"ja_JP": "フルコース",
				"ko_KR": "풀코스",
				"langUid": 1139
			},
			"description": {
				"en_US": "A complete dinner, consisting of several courses. \\c[1]Slow\\c[0].",
				"de_DE": "Ein ganzes Dinner, besteht aus mehreren Gängen. Langsam.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "丰盛的晚餐，有几种不同的菜品。\\c[1]缓慢\\c[0]。<<A<<[CHANGED 2017/07/07]",
				"ja_JP": "数種類のコース料理から成るフルコース。使用には\\c[1]時間がかかる\\c[0]。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "몇 가지 코스로 이루어진 완벽한 식사입니다. \\c[1]느려집니다\\c[0].<<A<<[CHANGED 2017/07/21]",
				"langUid": 1140
			},
			"type": "CONS",
			"rarity": 2,
			"cost": 2300,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 2,
			"time": 35,
			"stats": [
				"HP-2",
				"ATTACK-2",
				"DEFENSE-2",
				"FOCUS-2"
			],
			"noTrack": false,
			"foodSprite": "COLD_PLATE"
		},
		{
			"name": {
				"en_US": "Bronze Chest Plate",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "青铜箱甲",
				"ja_JP": "ブロンズチェストプレート<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "청동 상자 판금 갑옷",
				"langUid": 1650
			},
			"description": {
				"en_US": "Armor crafted from bronze chests. Offers no extra storage room, though.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "用青铜箱子制成的盔甲。但是不提供额外的存储空间。",
				"ja_JP": "青銅の宝箱から生成されたよろい。だからといって収納性はない。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "청동 상자로 만들어진 판금 갑옷. 하지만 무언가를 보관할 자리는 없습니다.",
				"langUid": 1651
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 22,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 177,
				"defense": 13,
				"focus": 5
			},
			"properties": {
				"XP_PLUS": 0.8,
				"DROP_CHANCE": 1.1
			},
			"order": 33,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Silver Chest Plate",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "白银箱甲",
				"ja_JP": "シルバーチェストプレート<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "은 상자 판금 갑옷",
				"langUid": 1652
			},
			"description": {
				"en_US": "Armor crafted from silver chests. Strong against werewolves, weak against keys.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "由白银宝箱打造的盔甲。不怕狼人，怕钥匙。",
				"ja_JP": "銀の宝箱から生成されたよろい。人狼に対して強く、鍵に対して弱い。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "은 상자로 만들어진 판금 갑옷. 늑대인간을 상대로는 강하지만, 열쇠에는 약합니다.",
				"langUid": 1653
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 33,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1.1,
					1.1,
					1.1,
					1.1
				],
				"hp": 313,
				"defense": 24,
				"focus": 10
			},
			"properties": {
				"XP_PLUS": 0.75,
				"DROP_CHANCE": 1.15
			},
			"order": 34,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Golden Chest Plate",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "黄金箱甲",
				"ja_JP": "ゴールデンチェストプレート<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "금 상자 판금 갑옷",
				"langUid": 1815
			},
			"description": {
				"en_US": "Armor crafted from golden chests. Stronger than it has any right to be.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "使用黄金箱子打造的盔甲，却完全没有黄金质地软的弱点。",
				"ja_JP": "金の宝箱から生成されたよろいだが、そうとは思えないほどの強さを誇る。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "금 상자로 만들어진 판금 갑옷. 생각보다 단단합니다.",
				"langUid": 1816
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 54,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 676,
				"defense": 53,
				"focus": 21
			},
			"properties": {
				"DROP_CHANCE": 1.2,
				"XP_PLUS": 0.7
			},
			"order": 35,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Hungry Salmon",
				"de_DE": "Hungriger Lachs",
				"langUid": 1155,
				"zh_CN": "饥饿的三文鱼",
				"ko_KR": "배고픈 연어",
				"ja_JP": "空腹のサーモン"
			},
			"description": {
				"en_US": "The innate power of this small fish seems to be sealed by a need for food. ",
				"de_DE": "Dieser kleine Fisch scheint vom Hunger getrieben zu sein.",
				"fr_FR": "undefined",
				"langUid": 1156,
				"zh_CN": "这条小鱼天生的力量似乎被其饥饿所封印。",
				"ko_KR": "이 작은 물고기는 배고파서 선천적으로 타고난 힘을 쓰기 힘듭니다.",
				"ja_JP": "この小さな魚の持つ力は空腹のため封印されている。"
			},
			"type": "TRADE",
			"icon": "item-trade",
			"rarity": 3,
			"order": 118,
			"effect": {
				"sheet": "",
				"name": null
			},
			"cost": 0
		},
		{
			"name": {
				"en_US": "Plate of Chests",
				"de_DE": "Panzer der Truhen",
				"langUid": 1160,
				"zh_CN": "箱子盔甲",
				"ko_KR": "상자로 만든 판금 갑옷",
				"ja_JP": "プレートオブチェスト"
			},
			"description": {
				"en_US": "Armor crafted from all kind of chests. WIP",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "使用各种箱子打造的盔甲。",
				"ja_JP": "全種類の宝箱から生成されたよろい。編集中。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1313,
				"ko_KR": "모든 종류의 상자로 만든 갑옷입니다. VVIP"
			},
			"type": "EQUIP",
			"rarity": 4,
			"cost": 2,
			"level": 1,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1.1,
					1.1,
					1.1,
					1.1
				],
				"hp": 842,
				"defense": 21,
				"focus": 50
			},
			"properties": {
				"XP_ZERO": 2,
				"DROP_CHANCE": 1.3
			},
			"order": 36,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": true
		},
		{
			"order": 50,
			"name": {
				"en_US": "Billston's Com",
				"de_DE": "",
				"langUid": 1178,
				"zh_CN": "比尔斯顿的通讯器",
				"ko_KR": "빌스턴의 발신기",
				"ja_JP": "ビルストンの無線機"
			},
			"description": {
				"en_US": "A simple, rectangular communicator, supposedly belonging to Billston. Waterproof.",
				"de_DE": "Ein rechteckiger Kommunikator, wahrscheinlich von Billston. Wasserfest.",
				"fr_FR": "undefined",
				"langUid": 1179,
				"zh_CN": "一个简单的矩形通讯器，据说属于比尔斯顿。而且防水。",
				"ko_KR": "빌스턴이 가지고 있는 직사각형 모양의 발신기입니다. 방수도 되죠.",
				"ja_JP": "ビルストンの所有物と思われる、ごく普通の四角い無線機。防水加工済み。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 72,
			"name": {
				"en_US": "Smokaway",
				"de_DE": "",
				"langUid": 1180,
				"zh_CN": "烟雾弹",
				"ko_KR": "연막탄",
				"ja_JP": "煙爆弾"
			},
			"description": {
				"en_US": "A most convenient bomb emitting a dense smoke. Use to escape bothersome guards.",
				"de_DE": "Eine praktische Rauchbombe. Benutze sie um lästigen Wachen zu entkommen.",
				"fr_FR": "undefined",
				"langUid": 1181,
				"zh_CN": "一种十分方便的炸弹，散发出浓厚的烟雾。可以用来躲避麻烦的守卫。",
				"ko_KR": "짙은 연기를 내뿜는 가장 다루기 쉬운 폭탄. 성가신 경비원들을 따돌릴 때 사용합니다.",
				"ja_JP": "濃い煙を発生させる便利な爆弾。めんどうな警備員から逃げるのに使おう。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 71,
			"name": {
				"en_US": "Tracker Chip",
				"de_DE": "",
				"langUid": 1183,
				"zh_CN": "追踪芯片",
				"ko_KR": "추적 칩",
				"ja_JP": "追跡用チップ"
			},
			"description": {
				"en_US": "A chip tracking your movement. Includes a parental control manual.",
				"de_DE": "",
				"fr_FR": "undefined",
				"zh_CN": "一块可以追踪你移动轨迹的芯片。附赠家长操作手册。",
				"langUid": 1184,
				"ko_KR": "위치를 추적하는 칩입니다. 모체 조종 안내서가 들어있습니다.",
				"ja_JP": "あなたの移動を追跡するチップ。ペアレンタルコントロールに関するマニュアル付き。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 70,
			"name": {
				"en_US": "Pond Slums Pass",
				"de_DE": "",
				"langUid": 1185,
				"zh_CN": "池塘平民窟通行证",
				"ko_KR": "연못 빈민가 통행증",
				"ja_JP": "ポンド・スラムの通行証"
			},
			"description": {
				"en_US": "This pass grant it's owner access to the trader hubs in Basin Keep's Pond Slums.",
				"de_DE": "",
				"fr_FR": "undefined",
				"zh_CN": "通过此证进入巴辛堡的池塘平民窟贸易区。",
				"langUid": 1186,
				"ko_KR": "유역의 아성의 연못 빈민가에 있는 상인 허브에 들어갈 수 있는 통행증입니다.",
				"ja_JP": "ベイスンキープのポンド・スラムにあるトレーダーハブへの通行許可証。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 47,
			"name": {
				"en_US": "One Up",
				"fr_FR": "undefined",
				"zh_CN": "止痛剂",
				"ja_JP": "ワンナップ",
				"ko_KR": "One Up",
				"langUid": 1198
			},
			"description": {
				"en_US": "This peculiar remedy soothes the pain of whoever takes it. \\c[1]Slow\\c[0].",
				"fr_FR": "undefined",
				"zh_CN": "吃下后，立即停止任何疼痛感。\\c[1]缓慢\\c[0]。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "この独特な薬を摂取するとたちまち苦痛が消えていく。使用には\\c[1]時間がかかる\\c[0]。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "이 이상한 약은 복용자의 고통을 줄여줍니다. \\c[1]느려집니다\\c[0].<<A<<[CHANGED 2017/10/17]",
				"langUid": 1285,
				"de_DE": "<<A<<[CHANGED 2017/10/13]"
			},
			"type": "CONS",
			"rarity": 3,
			"cost": 60000,
			"level": 1,
			"icon": "item-items",
			"noTrack": false,
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 2,
			"time": 60,
			"stats": [
				"SP_REGEN-3",
				"REGEN-3"
			],
			"foodSprite": "ONE_UP"
		},
		{
			"order": 21,
			"name": {
				"en_US": "Maroon Probe",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "褐红探针",
				"ja_JP": "マルーンのプローブ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1405,
				"ko_KR": "마룬 탐사기"
			},
			"description": {
				"en_US": "A lost and found data probe installed by Henry the Researcher.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一个由研究员亨利安装的探针。",
				"ja_JP": "研究者ヘンリーによって設置されたデータプローブ。失われた後、発見された。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1406,
				"ko_KR": "연구원 헨리가 설치한 분실 데이터 탐사기입니다."
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 84,
			"name": {
				"en_US": "Polished Mic",
				"de_DE": "",
				"langUid": 1207,
				"zh_CN": "抛光的麦克风",
				"ko_KR": "광택이 나는 마이크",
				"ja_JP": "磨き込まれたマイク"
			},
			"description": {
				"en_US": "It looks almost new but scratches show it was used for many years.",
				"de_DE": "",
				"fr_FR": "undefined",
				"zh_CN": "它看起来很新，但上面的刮痕说明它已经被使用过很多年了。",
				"langUid": 1208,
				"ko_KR": "거의 새것으로 보이지만 몇 년간 사용했던 것으로 보이는 스크래치가 있습니다.",
				"ja_JP": "一見新品に見えるが、長年使われてきた跡を消してあるだけ。"
			},
			"type": "TRADE",
			"rarity": 3,
			"cost": 1000,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 74,
			"name": {
				"en_US": "Krys'kajo Key",
				"de_DE": "",
				"langUid": 1210,
				"zh_CN": "凯斯卡罗钥匙",
				"ko_KR": "크리스카조 열쇠",
				"ja_JP": "クリュス・カーヨの鍵"
			},
			"description": {
				"en_US": "A regular key for the Grand Krys'kajo.",
				"de_DE": "",
				"fr_FR": "undefined",
				"zh_CN": "一把大凯斯卡罗的普通钥匙。",
				"langUid": 1214,
				"ko_KR": "그랜드 크리스카조의 기본 열쇠입니다.",
				"ja_JP": "クリュス・カーヨ大神殿で使う普通の鍵。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 75,
			"name": {
				"en_US": "Kajo Master Key",
				"de_DE": "",
				"langUid": 1213,
				"zh_CN": "卡罗主钥匙",
				"ko_KR": "카조 마스터 열쇠",
				"ja_JP": "カーヨのマスターキー"
			},
			"description": {
				"en_US": "Master Key of Grand Krys'kajo.",
				"de_DE": "",
				"fr_FR": "undefined",
				"zh_CN": "大凯斯卡罗的主钥匙。",
				"langUid": 1221,
				"ko_KR": "그랜드 크리스카조의 마스터 열쇠입니다.",
				"ja_JP": "クリュス・カーヨ大神殿のマスターキー。"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 44,
			"name": {
				"en_US": "Warkeeper",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "嗜战者",
				"ja_JP": "ウォーキーパー<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "워키퍼",
				"langUid": 1504
			},
			"description": {
				"en_US": "A blade made out of thick sheets of metal. Used by blood hungry warmongers.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "这把剑由厚重的金属板打造而成，是战争狂热者们的利器。",
				"ja_JP": "厚い金属の板で作られた剣。血に飢える戦闘狂が使う。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "두꺼운 금속으로 겹겹이 만든 검입니다. 피에 미친 전쟁광이 사용합니다.",
				"langUid": 1505
			},
			"type": "EQUIP",
			"rarity": 4,
			"cost": 0,
			"level": 60,
			"icon": "item-sword",
			"equipType": "ARM",
			"noTrack": false,
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 100,
				"attack": 108,
				"focus": 50
			},
			"properties": {
				"BERSERK": 1.5
			},
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 30,
			"name": {
				"en_US": "Lead Boots",
				"de_DE": "",
				"langUid": 1252,
				"zh_CN": "铅靴",
				"ko_KR": "리드 부츠",
				"ja_JP": "鉛のブーツ"
			},
			"description": {
				"en_US": "Heavy Boots which are often used against windy days.",
				"de_DE": "Schwere Stiefel, welche häufig für windige Tage getragen werden.",
				"fr_FR": "undefined",
				"zh_CN": "一双重靴，适合在大风天里穿戴。",
				"langUid": 1253,
				"ko_KR": "종종 바람 부는 날에 사용되는 무거운 부츠입니다.",
				"ja_JP": "風の強い日によく使われる重いブーツ。"
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 1000,
			"level": 1,
			"icon": "item-shoe",
			"equipType": "FEET",
			"noTrack": false,
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				]
			},
			"properties": {
				"ITEM_GUARD": 2
			},
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 41,
			"name": {
				"en_US": "Kebab Roll",
				"de_DE": "Name",
				"fr_FR": "undefined",
				"zh_CN": "羊肉卷",
				"ja_JP": "ケバブロール",
				"ko_KR": "케밥 롤",
				"langUid": 1265
			},
			"description": {
				"en_US": "A flat roll filled with meat and vegetables.",
				"de_DE": "Eine flache Rolle, die mit Fleisch und Gemüse gefüllt ist.<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "一个裹有羊肉和蔬菜的卷。<<A<<[CHANGED 2017/07/11]",
				"ja_JP": "肉と野菜たっぷりの平らなロール。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "고기와 채소로 속을 채운 납작한 롤입니다.<<A<<[CHANGED 2017/07/21]",
				"langUid": 1289
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 450,
			"level": 1,
			"icon": "item-items",
			"noTrack": false,
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 30,
			"stats": [
				"OVERHEAT-1"
			],
			"foodSprite": "KEBAB"
		},
		{
			"order": 42,
			"name": {
				"en_US": "Wrap Roll",
				"de_DE": "Name",
				"fr_FR": "undefined",
				"zh_CN": "卷中卷",
				"ja_JP": "ラップロール",
				"ko_KR": "랩 롤",
				"langUid": 1267
			},
			"description": {
				"en_US": "A wrap inside a roll which is a wrap too. Confusing but tasty nonetheless.",
				"de_DE": "Description.",
				"fr_FR": "undefined",
				"zh_CN": "卷里面还有个卷。虽然造型奇怪，但很好吃。",
				"ja_JP": "ラップであるロールの中にはまたラップが。理解できないけどおいしい。",
				"ko_KR": "겉에 싸는 랩이 롤 안에도 들어있습니다. 혼란스럽지만 맛있습니다.",
				"langUid": 1288
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 999,
			"level": 1,
			"icon": "item-items",
			"noTrack": false,
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 30,
			"stats": [
				"OVERHEAT-2"
			],
			"foodSprite": "KEBAB2"
		},
		{
			"order": 44,
			"name": {
				"en_US": "Meaty Risotto",
				"de_DE": "Name",
				"fr_FR": "undefined",
				"zh_CN": "酱肉焗饭",
				"ja_JP": "ミートリゾット",
				"ko_KR": "고기 가득 리소토",
				"langUid": 1290
			},
			"description": {
				"en_US": "A hot-steaming batch of risotto with chunky meat pieces.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "由肉片点缀，散发着热气的美味焗饭，<<A<<[CHANGED 2017/07/11]",
				"ja_JP": "大きな肉切れが入ったほかほかのリゾット。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "고깃덩어리가 든 따뜻한 리소토 한 접시입니다.<<A<<[CHANGED 2017/07/21]",
				"langUid": 1291
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 450,
			"level": 1,
			"icon": "item-items",
			"noTrack": false,
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 30,
			"stats": [
				"SP_REGEN-1"
			],
			"foodSprite": "RISOTTO"
		},
		{
			"order": 45,
			"name": {
				"en_US": "Shrimp Risotto",
				"de_DE": "Name",
				"fr_FR": "undefined",
				"zh_CN": "虾仁焗饭",
				"ja_JP": "エビリゾット",
				"ko_KR": "새우 리소토",
				"langUid": 1292
			},
			"description": {
				"en_US": "This risotto has been spiced up with chili and a shrimps.",
				"de_DE": "Description.",
				"fr_FR": "undefined",
				"zh_CN": "混搭了辣椒和虾仁的焗饭。",
				"ja_JP": "チリとエビでピリ辛に味付けされたリゾット。",
				"ko_KR": "칠리와 새우로 맛을 낸 리소토입니다.",
				"langUid": 1293
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 999,
			"level": 1,
			"icon": "item-items",
			"noTrack": false,
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 30,
			"stats": [
				"SP_REGEN-2"
			],
			"foodSprite": "RISOTTO"
		},
		{
			"order": 46,
			"name": {
				"en_US": "Green Risotto",
				"de_DE": "Name",
				"fr_FR": "undefined",
				"zh_CN": "蔬菜焗饭",
				"ja_JP": "グリーンリゾット",
				"ko_KR": "그린 리소토",
				"langUid": 1294
			},
			"description": {
				"en_US": "A healthy risotto served with roasted vegetables.",
				"de_DE": "Description.",
				"fr_FR": "undefined",
				"zh_CN": "添加蔬菜烹饪而成的健康绿色食品。",
				"ja_JP": "野菜炒めの添えられた栄養満点のリゾット。",
				"ko_KR": "구운 채소와 함께 제공되는 건강한 리소토입니다.",
				"langUid": 1295
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 2050,
			"level": 1,
			"icon": "item-items",
			"noTrack": false,
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"time": 30,
			"stats": [
				"SP_REGEN-3"
			],
			"foodSprite": "RISOTTO"
		},
		{
			"order": 48,
			"name": {
				"en_US": "Final Dinner",
				"de_DE": "Name",
				"fr_FR": "undefined",
				"zh_CN": "最后的晚餐",
				"ja_JP": "最後の晩さん",
				"ko_KR": "최후의 만찬",
				"langUid": 1296
			},
			"description": {
				"en_US": "This is the ultimate dish. Nothing compares.",
				"de_DE": "Description.",
				"fr_FR": "undefined",
				"zh_CN": "究极的餐点。没有比这更好的了。",
				"ja_JP": "これぞ究極の夕食。代わりになるものなどない。",
				"ko_KR": "궁극의 음식입니다. 그 무엇과도 비교할 수 없죠.",
				"langUid": 1297
			},
			"type": "CONS",
			"rarity": 4,
			"cost": 1000,
			"level": 1,
			"icon": "item-items",
			"noTrack": false,
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 3,
			"time": 15,
			"stats": [
				"HP-3",
				"ATTACK-3",
				"DEFENSE-3",
				"FOCUS-3",
				"OVERHEAT-3",
				"SP_REGEN-3"
			],
			"foodSprite": "COLD_PLATE"
		},
		{
			"order": 30,
			"name": {
				"en_US": "Tattered Satchel",
				"de_DE": "Name",
				"langUid": 1301,
				"zh_CN": "破烂的药包",
				"ko_KR": "낡은 가방",
				"ja_JP": "ぼろぼろのカバン"
			},
			"description": {
				"en_US": "A pretty beat-up satchel used to store medicine and herbs.",
				"de_DE": "Description.",
				"fr_FR": "undefined",
				"zh_CN": "一个用来装药物和草药的破旧包裹。",
				"ja_JP": "薬や薬草を保存するのに使われていた、ぼろぼろの小さなカバン。",
				"langUid": 1302,
				"ko_KR": "약과 허브를 담던 꽤 낡은 가방입니다."
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 1000,
			"level": 1,
			"icon": "item-belt",
			"equipType": "TORSO",
			"noTrack": false,
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				]
			},
			"properties": {
				"APPETITE": 2
			},
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 31,
			"name": {
				"en_US": "Prism Pouch",
				"de_DE": "Name",
				"langUid": 1303,
				"zh_CN": "五彩包",
				"ko_KR": "7색 주머니",
				"ja_JP": "プリズムポーチ"
			},
			"description": {
				"en_US": "A neatly stitched belt featuring multiple pouches in different colors.",
				"de_DE": "Description.",
				"fr_FR": "undefined",
				"zh_CN": "一条上面缝着许多彩色小袋子的腰带。",
				"ja_JP": "様々な色のポケットがきれいにあしらわれた帯。",
				"langUid": 1310,
				"ko_KR": "서로 다른 색의 주머니가 깔끔하게 기워진 벨트입니다."
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 1000,
			"level": 1,
			"icon": "item-belt",
			"equipType": "TORSO",
			"noTrack": false,
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				]
			},
			"properties": {
				"APPETITE": 2
			},
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 32,
			"name": {
				"en_US": "Infinite Bag",
				"de_DE": "Name",
				"langUid": 1305,
				"zh_CN": "无尽包裹",
				"ko_KR": "무한의 가방",
				"ja_JP": "インフィニットバッグ"
			},
			"description": {
				"en_US": "This bag is seemingly infinitely deep. Many Adventures used them on their journeys. (ADD MORE MODS)",
				"de_DE": "Description.",
				"fr_FR": "undefined",
				"zh_CN": "这个包裹似乎有无尽的深度。许多冒险者都会使用。",
				"ja_JP": "底がないのではと思わせるバッグ。多くの冒険家が旅のお供として使ったという。(今後改良する)",
				"langUid": 1311,
				"ko_KR": "이 가방의 깊이는 끝없는 것 같습니다. 많은 모험가의 여정에 사용됩니다. (모드 추가하기)"
			},
			"type": "EQUIP",
			"rarity": 4,
			"cost": 0,
			"level": 1,
			"icon": "item-belt",
			"equipType": "TORSO",
			"noTrack": false,
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				]
			},
			"properties": {
				"APPETITE": 3
			},
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 53,
			"name": {
				"en_US": "Ti'im Residue",
				"de_DE": "Ti'im-Residuum",
				"langUid": 1314,
				"zh_CN": "大提姆的残余",
				"ja_JP": "ティームの残りカス<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "티임 잔여물"
			},
			"description": {
				"en_US": "Unique Residue left behind by a Ti'im.",
				"de_DE": "Einzigartiges Residuum eines Ti'im.",
				"fr_FR": "undefined",
				"zh_CN": "大提姆留下的特殊残余物。",
				"ja_JP": "ティームが残した独特な残留物。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1315,
				"ko_KR": "티임으로부터 남은 잔여물입니다."
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 47,
			"name": {
				"en_US": "Adept Gloves",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "善战手套",
				"ja_JP": "アデプトグローブ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1705,
				"ko_KR": "숙련자의 장갑"
			},
			"description": {
				"en_US": "The torn pieces of these gloves tell the tale of a great warrior.",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "手套上的痕迹倾诉着一位伟大战士的传说。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "この手袋の切れ端が、偉大なる戦士の激しい戦いを物語っている。<<A<<[CHANGED 2017/11/04]",
				"langUid": 1706,
				"ko_KR": "이 찢어진 장갑이 훌륭한 전사들의 모습을 보여줍니다.<<A<<[CHANGED 2017/11/16]"
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 30,
			"icon": "item-sword",
			"equipType": "ARM",
			"noTrack": false,
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": -200,
				"attack": 10,
				"defense": 35,
				"focus": 30
			},
			"properties": {
				"PERFECT_GUARD_WINDOW": 1.5
			},
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 25,
			"name": {
				"en_US": "Storage Unit #1",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"langUid": 1329,
				"zh_CN": "储存单元 #1",
				"ja_JP": "ストレージユニット #1<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "저장 장치 #1"
			},
			"description": {
				"en_US": "A storage unit used by the \\c[3]Omni Gilders\\c[0] to hold trade materials.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "\\c[3]超级团\\c[0]用来储藏材料的储存单元。",
				"ja_JP": "\\c[3]オムニギルダー\\c[0]がトレード用素材の保存に使うストレージユニット。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1330,
				"ko_KR": "\\c[3]옴니 글라인더\\c[0]가 거래 아이템을 보관하는 데 사용하는 저장 장치입니다."
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"name": {
				"en_US": "Scouting Visor",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "侦测护镜<<A<<[CHANGED 2017/10/13]",
				"ja_JP": "スカウトバイザー<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "정찰용 바이저<<A<<[CHANGED 2017/10/17]",
				"langUid": 1332
			},
			"description": {
				"en_US": "An enhanced visor that allows for quick analysis even at a distance.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "可以让佩戴者远距离分析的强化护镜。",
				"ja_JP": "遠距離からでも素早い分析を可能にする強化バイザー。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "먼 거리에서도 빠르게 분석할 수 있는 강화된 면갑입니다.",
				"langUid": 1333
			},
			"type": "EQUIP",
			"cost": 87000,
			"level": 56,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"defense": 4,
				"focus": 145
			},
			"properties": {
				"AIM_SPEED": 1.25,
				"CRITICAL_DMG": 1.25
			},
			"rarity": 2,
			"order": 34,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 10,
			"name": {
				"en_US": "Just Water",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "晶泉",
				"ja_JP": "ただの水<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "그냥 물",
				"langUid": 1935
			},
			"description": {
				"en_US": "Molten ice, held in some sort of container. Dangerous in large volumes! \\c[3]Fast\\c[0].",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "最为纯净的水源中产出的透明液体。\\c[1]快速\\c[0]。<<A<<[CHANGED 2017/07/07]",
				"ja_JP": "何かの入れ物に入った溶けた氷。飲み過ぎに気をつけよう！使用に\\c[3]時間がかからない\\c[0]。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "통에 담겨있는 얼음 녹은 물입니다. 많이 가지고 있으면 위험합니다! \\c[3]빨라집니다\\c[0].<<A<<[CHANGED 2017/07/21]",
				"langUid": 1936
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 222,
			"level": 1,
			"icon": "item-items",
			"noTrack": false,
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 3,
			"time": 15,
			"stats": [
				"COND_HEALING-2"
			],
			"foodSprite": "WATER"
		},
		{
			"order": 49,
			"name": {
				"en_US": "Bear Beer",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "熊之啤酒",
				"ja_JP": "ベアビール<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "곰 맥주",
				"langUid": 1923
			},
			"description": {
				"en_US": "Drink evoking the strength of bears, the most unstoppable of forces. \\c[3]Fast\\c[0].",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "喝下它能让人获得熊的力量，无人能敌。\\c[1]快速\\c[0]。<<A<<[CHANGED 2017/07/07]",
				"ja_JP": "飽くなき力の象徴である、クマの強さを得られるビール。使用に\\c[3]時間がかからない\\c[0]。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "마시면 겉잡을 수 없는 곰의 기운이 솟아납니다. \\c[3]빨라집니다\\c[0].<<A<<[CHANGED 2017/07/21]",
				"langUid": 1924
			},
			"type": "CONS",
			"rarity": 2,
			"cost": 1300,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 3,
			"time": 15,
			"stats": [
				"ATTACK-3",
				"STUN_THRESHOLD-3"
			],
			"noTrack": false,
			"foodSprite": "BEAR_BEER"
		},
		{
			"order": 50,
			"name": {
				"en_US": "Crab Mead",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "蟹之蜜酒",
				"ja_JP": "カニ密酒<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "게술",
				"langUid": 1925
			},
			"description": {
				"en_US": "Drink evoking the sturdiness of crabs that can resist massive damage. \\c[3]Fast\\c[0].",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "喝下它能让人获得蟹的坚韧，承受大量伤害。\\c[1]快速\\c[0]。<<A<<[CHANGED 2017/07/07]",
				"ja_JP": "どんな攻撃にも耐えうる、カニの頑丈さを得られる蜂蜜酒。使用に\\c[3]時間がかからない\\c[0]。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "마시면 게처럼 단단해져 높은 대미지를 막을 수 있습니다. \\c[3]빨라집니다\\c[0].<<A<<[CHANGED 2017/07/21]",
				"langUid": 1926
			},
			"type": "CONS",
			"rarity": 2,
			"cost": 1300,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 3,
			"time": 15,
			"stats": [
				"SPIKE_DMG-3",
				"DEFENSE-3"
			],
			"noTrack": false,
			"foodSprite": "GRAB_MEAD"
		},
		{
			"order": 51,
			"name": {
				"en_US": "Fox Sake",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "狐之清酒",
				"ja_JP": "日本酒キツネ山<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "여우 사케",
				"langUid": 1927
			},
			"description": {
				"en_US": "Drink evoking the cleverness of foxes that always catch their prey. \\c[3]Fast\\c[0].",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "喝下它能让人获得狐的智慧，运筹帷幄。\\c[1]快速\\c[0]。<<A<<[CHANGED 2017/07/07]",
				"ja_JP": "どんな獲物でも仕留める、キツネの賢さを得られる日本酒。使用に\\c[3]時間がかからない\\c[0]。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "마시면 먹잇감을 잡는 여우의 영리함이 생깁니다. \\c[3]빨라집니다\\c[0].<<A<<[CHANGED 2017/07/21]",
				"langUid": 1928
			},
			"type": "CONS",
			"rarity": 2,
			"cost": 1300,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 3,
			"time": 15,
			"stats": [
				"FOCUS-3",
				"BREAK_DMG-3"
			],
			"noTrack": false,
			"foodSprite": "FOX_SAKE"
		},
		{
			"order": 52,
			"name": {
				"en_US": "Whale Wine",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "鲸之红酒",
				"ja_JP": "ホエールワイン<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "고래 와인",
				"langUid": 1929
			},
			"description": {
				"en_US": "Drink evoking the vitality of whales, giant rulers of the oceans. \\c[3]Fast\\c[0].",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "喝下它能让人获得鲸的生命，如同这海洋的霸主。\\c[1]快速\\c[0]。<<A<<[CHANGED 2017/07/07]",
				"ja_JP": "海の偉大なる支配者である、クジラの生命力を得られるワイン。使用に\\c[3]時間がかからない\\c[0]。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "마시면 바다의 지배자인 고래의 생명력을 얻습니다. \\c[3]빨라집니다\\c[0].<<A<<[CHANGED 2017/07/21]",
				"langUid": 1930
			},
			"type": "CONS",
			"rarity": 2,
			"cost": 1300,
			"level": 1,
			"icon": "item-items",
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 3,
			"time": 15,
			"stats": [
				"HP-3",
				"REGEN-3"
			],
			"noTrack": false,
			"foodSprite": "WHALE_WINE"
		},
		{
			"order": 56,
			"name": {
				"en_US": "Brewing Kit",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"langUid": 1351,
				"zh_CN": "酿酒素材",
				"ja_JP": "醸造キット<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "양조 키트"
			},
			"description": {
				"en_US": "Stuff to Brew!",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "用来酿酒的东西！",
				"ja_JP": "酒の材料！<<A<<[CHANGED 2017/08/03]",
				"langUid": 1352,
				"ko_KR": "양조하는 데 필요한 도구입니다!"
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 8,
			"name": {
				"en_US": "Brewing Kit: Bear",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "酿酒素材：熊",
				"ja_JP": "醸造キット: クマ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1354,
				"ko_KR": "양조 키트: 곰"
			},
			"description": {
				"en_US": "Ingredients to brew \"Bear Beer\". Use at the Brewing Machine in Ba'kii Kum.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "用于酿造\"熊之啤酒\"。可在巴基库姆的酿酒机中使用。<<A<<[CHANGED 2017/07/01]",
				"ja_JP": "「ベアビール」の材料。バキーイ・クムの醸造マシーンで使う。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1389,
				"ko_KR": "\"곰 맥주\"를 양조할 재료. 바키 쿰에 있는 양조 기계에서 사용하세요."
			},
			"type": "TRADE",
			"rarity": 1,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			},
			"cost": 2000
		},
		{
			"order": 9,
			"name": {
				"en_US": "Brewing Kit: Crab",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"langUid": 1356,
				"zh_CN": "酿酒素材：蟹",
				"ja_JP": "醸造キット: カニ<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "양조 키트: 게"
			},
			"description": {
				"en_US": "Ingredients to brew \"Crab Mead\". Use at the Brewing Machine in Ba'kii Kum.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "用于酿造\"蟹之蜜酒\"。可在巴基库姆的酿酒机中使用。",
				"ja_JP": "「カニ密酒」の材料。バキーイ・クムの醸造マシーンで使う。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1390,
				"ko_KR": "\"게술\"을 양조할 재료. 바키 쿰에 있는 양조 기계에서 사용하세요."
			},
			"type": "TRADE",
			"rarity": 1,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			},
			"cost": 2000
		},
		{
			"order": 10,
			"name": {
				"en_US": "Brewing Kit: Fox",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"langUid": 1358,
				"zh_CN": "酿酒素材：狐",
				"ja_JP": "醸造キット: キツネ<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "양조 키트: 여우"
			},
			"description": {
				"en_US": "Ingredients to brew \"Fox Sake\". Use at the Brewing Machine in Ba'kii Kum.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "用于酿造\"狐之清酒\"。可在巴基库姆的酿酒机中使用。",
				"ja_JP": "「日本酒キツネ山」の材料。バキーイ・クムの醸造マシーンで使う。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1391,
				"ko_KR": "\"여우 사케\"를 양조할 재료. 바키 쿰에 있는 양조 기계에서 사용하세요."
			},
			"type": "TRADE",
			"rarity": 1,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			},
			"cost": 2000
		},
		{
			"order": 11,
			"name": {
				"en_US": "Brewing Kit: Whale",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"langUid": 1360,
				"zh_CN": "酿酒素材：鲸",
				"ja_JP": "醸造キット: クジラ<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "양조 키트: 고래"
			},
			"description": {
				"en_US": "Ingredients to brew \"Whale Wine\". Use at the Brewing Machine in Ba'kii Kum.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "用于酿造\"鲸之红酒\"。可在巴基库姆的酿酒机中使用。",
				"ja_JP": "「ホエールワイン」の材料。バキーイ・クムの醸造マシーンで使う。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1392,
				"ko_KR": "\"고래 와인\"을 양조할 재료. 바키 쿰에 있는 양조 기계에서 사용하세요."
			},
			"type": "TRADE",
			"rarity": 1,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			},
			"cost": 2000
		},
		{
			"order": 36,
			"name": {
				"en_US": "Green Seed Shade",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"langUid": 1365,
				"zh_CN": "绿种证印",
				"ja_JP": "グリーンシードシェード<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "초록 씨앗 셰이드"
			},
			"description": {
				"en_US": "Opens the passage to \\c[3]Gaia's Garden\\c[0].",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "打开前往\\c[3]盖亚花园\\c[0]的通道。",
				"ja_JP": "\\c[3]ガイアの園\\c[0]への通行許可証。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1366,
				"ko_KR": "\\c[3]가이아의 정원\\c[0]으로 가는 길을 안내합니다."
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 22,
			"name": {
				"en_US": "Gaia Probe",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "盖亚探针",
				"ja_JP": "ガイアのプローブ<<A<<[CHANGED 2017/08/03]",
				"langUid": 1407,
				"ko_KR": "가이아 탐사기"
			},
			"description": {
				"en_US": "A lost and found data probe installed by Henry the Researcher.",
				"de_DE": "Description.<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "由研究员亨利安装的数据探针。",
				"ja_JP": "研究者ヘンリーによって設置されたデータプローブ。失われた後、発見された。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1408,
				"ko_KR": "연구원 헨리가 설치한 분실 데이터 탐사기입니다."
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 76,
			"name": {
				"en_US": "Old Man's Book",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "老人的书",
				"ja_JP": "老人の本<<A<<[CHANGED 2017/08/03]",
				"langUid": 1411,
				"ko_KR": "노인의 책"
			},
			"description": {
				"en_US": "A book belong to an old man you traded with. It mentions \\c[3]Sapphire Ridge\\c[0].",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "一个你跟你交易过的老人的书。里面提到了\\c[3]青玉山脉\\c[0]。",
				"ja_JP": "あなたとトレードをした老人が所有する本。\\c[3]サファイア峰\\c[0]について何か書いてある。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1412,
				"ko_KR": "당신의 아이템과 거래한 노인의 책. \\c[3]사파이어 산맥\\c[0]에 관해 쓰여 있습니다."
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 11,
			"name": {
				"en_US": "Crystal Water",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "晶泉",
				"ja_JP": "クリスタルウォーター<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "크리스털 워터",
				"langUid": 1933
			},
			"description": {
				"en_US": "A transparent liquid from the purest of sources. \\c[3]Fast\\c[0].",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "最为纯净的水源中产出的透明液体。\\c[1]快速\\c[0]。<<A<<[CHANGED 2017/07/07]",
				"ja_JP": "純粋な水のみでできている透明な液体。使用に\\c[3]時間がかからない\\c[0]。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "가장 순수하고 투명한 액체. \\c[3]빠름\\c[0].<<A<<[CHANGED 2017/07/21]",
				"langUid": 1934
			},
			"type": "CONS",
			"rarity": 1,
			"cost": 888,
			"level": 1,
			"icon": "item-items",
			"noTrack": false,
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 3,
			"time": 15,
			"stats": [
				"COND_HEALING-3"
			],
			"foodSprite": "WATER"
		},
		{
			"order": 119,
			"name": {
				"en_US": "Mysterious Box",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "神秘箱<<A<<[CHANGED 2017/07/01]",
				"ja_JP": "謎の箱<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "수수께끼의 상자",
				"langUid": 1937
			},
			"description": {
				"en_US": "A sturdy box of ever-changing size. Very popular with artists in Ancient times.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "形状变幻莫测的坚实箱子。在古代的艺术家中很流行。<<A<<[CHANGED 2017/07/01]",
				"ja_JP": "大きさが常に変わる頑丈な箱。古代人の時代の美術家たちが好んだという。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "크기가 계속 바뀌는 단단한 상자. 고대의 예술가들에게 인기가 많았습니다.",
				"langUid": 1938
			},
			"type": "TRADE",
			"rarity": 3,
			"cost": 0,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 120,
			"name": {
				"en_US": "Tremor Engine",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "颤动引擎<<A<<[CHANGED 2017/07/01]",
				"ja_JP": "振動エンジン<<A<<[CHANGED 2017/08/03]",
				"langUid": 1939,
				"ko_KR": "진동 엔진"
			},
			"description": {
				"en_US": "An unpowered mechanical device. Shaking it will make a rattling sound.",
				"de_DE": "<<A<<[CHANGED 2017/07/04]",
				"fr_FR": "undefined",
				"zh_CN": "未接通电源的一台机械装置。晃一晃的话会有咔嗒声。<<A<<[CHANGED 2017/07/01]",
				"ja_JP": "動力のない機械装置。振るとガタガタを音を立てる。<<A<<[CHANGED 2017/08/03]",
				"langUid": 1940,
				"ko_KR": "전력이 없는 기계 장치. 흔들면 덜거덕거리는 소리가 납니다."
			},
			"type": "TRADE",
			"rarity": 3,
			"cost": 0,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 53,
			"name": {
				"en_US": "Rising Super Star",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "超新星<<A<<[CHANGED 2017/07/07]",
				"ja_JP": "ライジングスーパースター<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "떠오르는 슈퍼스타<<A<<[CHANGED 2017/07/21]",
				"langUid": 1941
			},
			"description": {
				"en_US": "A delicious snack for every Kawaii Gun Jumper.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "双枪美少女的美味零食之选。<<A<<[CHANGED 2017/07/07]",
				"ja_JP": "「カワイイ・ガンジャンパー」に人気のおいしいお菓子。<<A<<[CHANGED 2017/08/03]",
				"ko_KR": "모든 카와이 건 점퍼를 위한 맛있는 과자입니다.<<A<<[CHANGED 2017/07/21]",
				"langUid": 1942
			},
			"type": "CONS",
			"rarity": 5,
			"cost": 10000,
			"level": 1,
			"icon": "item-items",
			"noTrack": false,
			"effect": {
				"sheet": "drops",
				"name": "circle"
			},
			"useSpeed": 1,
			"foodSprite": "SANDWICH",
			"time": 60,
			"stats": [
				"ATTACK-3",
				"DEFENSE-3"
			]
		},
		{
			"order": 62,
			"name": {
				"en_US": "Blue Grass",
				"fr_FR": "undefined",
				"zh_CN": "蓝草<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "青芝草<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "푸른 풀<<A<<[CHANGED 2017/10/17]",
				"langUid": 1943,
				"de_DE": "<<A<<[CHANGED 2017/10/13]"
			},
			"description": {
				"en_US": "This grass obtains its blue tint thanks to the rare nutrients found in \\v[area.forest.name].",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "这种植物因为\\v[area.forest.name]的罕见营养元素长成了蓝色。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "\\v[area.forest.name]で見つかる珍しい養分のため、この芝草は薄い青色をしている。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "이 풀은 \\v[area.forest.name]에서 발견되는 희귀한 영양소로 인해 옅은 푸른색을 띄게 되었습니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1944
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 63,
			"name": {
				"en_US": "Pink Petal",
				"fr_FR": "undefined",
				"zh_CN": "粉花瓣<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "桃色の花びら<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "분홍색 꽃잎<<A<<[CHANGED 2017/10/17]",
				"langUid": 1945,
				"de_DE": "<<A<<[CHANGED 2017/10/13]"
			},
			"description": {
				"en_US": "These petal never loose color as long as there are kept away from direct sunlight.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "这些花瓣只要不照到阳光就永远不会褪色。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "直射日光を避けて保存すれば、この花びらが色あせることはないという。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "이 꽃잎은 직사광선에 노출되지 않는 한 절대 색이 바래지 않습니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1946
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 64,
			"name": {
				"en_US": "Mystery Grape",
				"fr_FR": "undefined",
				"zh_CN": "神秘葡萄<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "謎のブドウ<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "수수께끼의 포도<<A<<[CHANGED 2017/10/17]",
				"langUid": 1947,
				"de_DE": "<<A<<[CHANGED 2017/10/13]"
			},
			"description": {
				"en_US": "How does it taste? Only one why to find out!",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "到底是什么味道呢？想知道的话只有一种办法！<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "どんな味がするんだろう？確かめる方法はただ1つ！<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "어떤 맛일까요? 알아낼 방법은 하나뿐이죠!<<C<<text : 'one why' ---> 'one way'?<<A<<[CHANGED 2017/10/17]",
				"langUid": 1948
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 200,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 65,
			"name": {
				"en_US": "Green Arbor",
				"fr_FR": "undefined",
				"zh_CN": "绿乔木<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "グリーンアーバー<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "초록색 교목<<A<<[CHANGED 2017/10/17]",
				"langUid": 1949,
				"de_DE": "<<A<<[CHANGED 2017/10/13]"
			},
			"description": {
				"en_US": "Sharp Spikes used as an alternative to metal on pikes by the Shads.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "沙德人曾用这种木枝来代替长矛上的金属矛尖。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "シャッド族が金属の代わりに槍の穂先に使っている、鋭く尖った枝。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "샤드족이 창 촉 대신 사용한 뾰족한 가시들입니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1950
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 66,
			"name": {
				"en_US": "Catalop Pellet",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "多刺坚果<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "カタロップペレット<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "카탈롭 콩알<<C<<Is Catalop a name of a monster?<<A<<[CHANGED 2017/10/17]",
				"langUid": 1951
			},
			"description": {
				"en_US": "A spiky orb that used by \\v[combat.name.hedgehog] to trap prey.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "\\v[combat.name.hedgehog]会用这些东西来困住猎物。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "\\v[combat.name.hedgehog]が獲物を捕らえるのに使う、小さなとげとげの球。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "\\v[combat.name.hedgehog]가 사냥감을 가두기 위해 사용한 가시 돋친 구슬입니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1952
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 67,
			"name": {
				"en_US": "Steel Bamboo",
				"fr_FR": "undefined",
				"zh_CN": "钢竹<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "スチールバンブー<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "강철 대나무<<A<<[CHANGED 2017/10/17]",
				"langUid": 1953,
				"de_DE": "<<A<<[CHANGED 2017/10/13]"
			},
			"description": {
				"en_US": "A rare bamboo breed said to be able to pierce even the hardest defense.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "一种罕见的竹子，据说能够穿透最为坚硬的护甲。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "どんな盾や装甲でも貫くことができると言われる、珍しい竹。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "가장 단단한 방어마저도 뚫을 수 있다고 알려진 희귀한 대나무입니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1954
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 200,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 68,
			"name": {
				"en_US": "Dirty Rubble",
				"fr_FR": "undefined",
				"zh_CN": "脏石<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "汚いがれき<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "더러운 돌멩이<<A<<[CHANGED 2017/10/17]",
				"langUid": 1955,
				"de_DE": "<<A<<[CHANGED 2017/10/13]"
			},
			"description": {
				"en_US": "Despite its name this rubble can be used to sharpen weapons.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "虽然名字不好听，但是可以用做磨刀石。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "その名こそ不名誉なものだが、このがれきを使うと武器の切れ味を良くすることできる。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "이름과는 상관없이 이 돌멩이는 무기를 더 뾰족하게 만드는 데 쓸 수 있습니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1956
			},
			"type": "TRADE",
			"rarity": 0,
			"cost": 50,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 69,
			"name": {
				"en_US": "Spark Tin",
				"fr_FR": "undefined",
				"zh_CN": "火花锡<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "デンキスズ<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "스파크 철<<A<<[CHANGED 2017/10/17]",
				"langUid": 1957,
				"de_DE": "<<A<<[CHANGED 2017/10/13]"
			},
			"description": {
				"en_US": "A metal that emits a light electric spark when touched. ",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "一种碰到时就会产生电火花的金属。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "触れると電気の火花を放つ金属。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "만졌을 때 가벼운 전기 스파크를 일으키는 금속입니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1958
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 100,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 70,
			"name": {
				"en_US": "Cobalt Crystal",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "钴水晶<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "コバルトクリスタル<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "청록색 크리스털<<A<<[CHANGED 2017/10/17]",
				"langUid": 1959
			},
			"description": {
				"en_US": "This ore is the name giver of Sapphire Ridge and extremely durable.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "这种极为坚韧的矿物是青玉山脉名称的来源。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "サファイア峰の名前の由来となった鉱石。非常に高い耐久性を誇る。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "사파이어 산맥의 이름을 이 광물에서 따왔으며, 내구성이 뛰어납니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1960
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 200,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 71,
			"name": {
				"en_US": "Dream Globe",
				"fr_FR": "undefined",
				"zh_CN": "梦之球<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "夢の地球儀<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "꿈 지구본<<A<<[CHANGED 2017/10/17]",
				"langUid": 1961,
				"de_DE": "<<A<<[CHANGED 2017/10/13]"
			},
			"description": {
				"en_US": "A sphere which surface mimics the one of Shadoon.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "里面似乎装着一个沙德隆城市。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "シャドゥーンの地表を模した球体。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "표면이 샤둔의 지표와 유사한 구체입니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1962
			},
			"type": "TRADE",
			"rarity": 3,
			"cost": 1000,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"name": {
				"en_US": "Cobalt Goggles",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "钴合金护目镜<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "コバルトゴーグル<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "청록색 안경<<A<<[CHANGED 2017/10/17]",
				"langUid": 1963
			},
			"description": {
				"en_US": "Futuristic looking goggles that enhance sight. Even help while reading in the dark!",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "非常耐用的护目镜，同时提供视觉增强功能。带着它还能在黑暗中看书！<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "近未来的な雰囲気の、視力を強化してくれるゴーグル。暗闇で読書する時にも役立つぞ！<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "시력을 증가시켜주는 미래적인 디자인의 안경. 심지어 어둠 속에서 읽는 것도 도와줍니다!<<A<<[CHANGED 2017/10/17]",
				"langUid": 1964
			},
			"type": "EQUIP",
			"cost": 71350,
			"level": 50,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"defense": 6,
				"focus": 119
			},
			"properties": {},
			"rarity": 1,
			"order": 31,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 38,
			"name": {
				"en_US": "Cobalt Edge",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "钴合金刃<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "コバルトエッジ<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "청록색 검<<A<<[CHANGED 2017/10/17]",
				"langUid": 1965
			},
			"description": {
				"en_US": "A weapon that is as beautiful as it is dangerous. Swings create a satisfying blur.",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "美丽又致命的武器。挥舞起来会产生美妙的模糊效果。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "その美しさに匹敵するほどの切れ味を誇る武器。その斬撃は惚れ惚れする残像を描く。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "아름다운 만큼 위험한 무기. 휘두르면 만족스러운 잔상을 남깁니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1966
			},
			"type": "EQUIP",
			"rarity": 1,
			"cost": 70975,
			"level": 50,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 78,
				"defense": 46
			},
			"properties": {},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Cobalt Mail",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "钴合金盔甲<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "コバルトメイル<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "청록색 갑옷<<A<<[CHANGED 2017/10/17]",
				"langUid": 1967
			},
			"description": {
				"en_US": "Extremely powerful armor. Surprisingly not letters from small, naughty creatures.",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "极其强大的护甲。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "非常に強力なよろい。こういう名前だが、小鳩が運んできた手紙ではない。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "아주 강력한 갑옷. 놀랍게도 청록색 편지가 아닙니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1968
			},
			"type": "EQUIP",
			"cost": 71925,
			"level": 50,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 935,
				"defense": 32
			},
			"properties": {},
			"rarity": 1,
			"order": 25,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Cobalt Boots",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "钴合金靴<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "コバルトブーツ<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "청록색 부츠<<A<<[CHANGED 2017/10/17]",
				"langUid": 1969
			},
			"description": {
				"en_US": "These extravagant boots prevent tripping by a shining blue with every step.",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "这双奢华的靴子每走一步都会留下蓝色的足迹，穿着它可以防止绊倒。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "とても高価なブーツ。一歩踏み出す度に青く光って、転ばないように足元を照らしてくれる。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "이 사치스러운 부츠는 걸음마다 푸른색으로 빛나 어딘가에 걸려 넘어지는 것을 방지합니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1970
			},
			"type": "EQUIP",
			"cost": 71350,
			"level": 50,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 627,
				"defense": 26,
				"focus": 37
			},
			"properties": {},
			"rarity": 1,
			"order": 24,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Laser Goggles",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "激光护目镜<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "レーザーゴーグル<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "레이저 안경<<A<<[CHANGED 2017/10/17]",
				"langUid": 1971
			},
			"description": {
				"en_US": "Empowers your sight with lasers! Not as deadly as it sounds but still very effective.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "用激光强化你的视觉！虽然没有听起来那么厉害但还是很有用的。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "レーザーであなたの視力を強化！この文言から想像できるような危険性はないが、その効果は折り紙付き。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "눈으로 레이저를 쏠 수 있게 만들어줍니다! 생각하는 것만큼 치명적이진 않지만, 여전히 효과적입니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1972
			},
			"type": "EQUIP",
			"cost": 0,
			"level": 59,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"defense": 7,
				"focus": 157
			},
			"properties": {},
			"rarity": 1,
			"order": 35,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 45,
			"name": {
				"en_US": "Laser Edge",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "激光刃<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "レーザーエッジ<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "레이저 검<<A<<[CHANGED 2017/10/17]",
				"langUid": 1973
			},
			"description": {
				"en_US": "Powered by deadly energy, these weapons are truly a force to be reckoned with.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "致命的激光是无人敢于小觑的。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "高威力エネルギーを動力源とした武器。その破壊力を侮ることなかれ。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "치명적인 에너지로 구동되는 이 무기들은 괄목할 만한 무력이 되어줍니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1974
			},
			"type": "EQUIP",
			"rarity": 1,
			"cost": 0,
			"level": 59,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 102,
				"defense": 61
			},
			"properties": {},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Laser Mail",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "激光盔甲<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "レーザーメイル<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "레이저 갑옷<<A<<[CHANGED 2017/10/17]",
				"langUid": 1975
			},
			"description": {
				"en_US": "Surrounds the body with energy that constantly circulates with the speed of light.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "一股以光速环绕身体的能量。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "エネルギー体が体の周りを光の速さでグルグルと周回し、敵の攻撃から守ってくれる。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "끊임없이 빛의 속도로 이동하는 에너지가 몸을 감쌉니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1976
			},
			"type": "EQUIP",
			"cost": 0,
			"level": 59,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 1223,
				"defense": 42
			},
			"properties": {},
			"rarity": 1,
			"order": 29,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Laser Boots",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "激光靴<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "レーザーブーツ<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "레이저 부츠<<A<<[CHANGED 2017/10/17]",
				"langUid": 1977
			},
			"description": {
				"en_US": "These shiny boots keep your feet as indestructible as the bridges they walk on!",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "这个靴子就像激光桥一样不可摧毁，提供完美的足部保护。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "この光り輝くブーツは、レーザーの橋と同じくらい頑丈だ！<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "이 빛나는 부츠는 당신의 발을 레이저 다리만큼이나 부수기 힘들게 만들어줍니다!<<A<<[CHANGED 2017/10/17]",
				"langUid": 1978
			},
			"type": "EQUIP",
			"cost": 0,
			"level": 59,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 826,
				"defense": 34,
				"focus": 48
			},
			"properties": {},
			"rarity": 1,
			"order": 27,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 107,
			"name": {
				"en_US": "Infected Cell",
				"fr_FR": "undefined",
				"zh_CN": "被感染的细胞<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "感染細胞<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "감염된 세포<<A<<[CHANGED 2017/10/17]",
				"langUid": 1979,
				"de_DE": "<<A<<[CHANGED 2017/10/13]"
			},
			"description": {
				"en_US": "It looks like a piece of metal overgrown by pulsating vines.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "看上去是一片被跳动着的血管包裹着的金属。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "金属片のような見た目をしており、表面は脈打つ管に覆われている。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "마치 맥박 뛰는 덩굴이 쇳조각을 감싸고 자란 것처럼 보이는군요.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1980
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 1000,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 108,
			"name": {
				"en_US": "Elemental DNA",
				"fr_FR": "undefined",
				"zh_CN": "元素DNA<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "エレメントDNA<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "원소 DNA<<A<<[CHANGED 2017/10/17]",
				"langUid": 1981,
				"de_DE": "<<A<<[CHANGED 2017/10/13]"
			},
			"description": {
				"en_US": "A DNA shaped spiral that cycles slowly through the color spectrum.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "一缕缓慢环绕着光谱的螺旋形DNA。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "色彩がゆっくりと変化する、DNA状のらせん。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "색 스펙트럼을 따라 천천히 색깔을 바꾸는 DNA 모양의 나선입니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1982
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 1000,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 58,
			"name": {
				"en_US": "Cursed Coin",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "诅咒硬币<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "呪いのコイン<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "저주받은 동전<<A<<[CHANGED 2017/10/17]",
				"langUid": 1983
			},
			"description": {
				"en_US": "A coin with a skull engraving. ",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "上面雕刻着骷髅的硬币。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "ドクロが彫られているコイン。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "해골이 새겨진 동전입니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1984
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 5,
			"name": {
				"en_US": "Broken Sword",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "破损之剑<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "壊れた剣<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "부서진 칼<<A<<[CHANGED 2017/10/17]",
				"langUid": 1985
			},
			"description": {
				"en_US": "Rusty and dented in various spots. ",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "锈迹斑斑，各处都有破损。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "至る所がさび付き、へこんでしまっている。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "여러 군데 녹슬고 구부러졌습니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1986
			},
			"type": "EQUIP",
			"rarity": 0,
			"cost": 0,
			"level": 1,
			"icon": "item-sword",
			"equipType": "ARM",
			"noTrack": false,
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 2
			},
			"properties": {},
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 109,
			"name": {
				"en_US": "Ronin Shell",
				"fr_FR": "undefined",
				"zh_CN": "龙鳞贝<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "ローニン・シェル<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "로닌 껍질<<A<<[CHANGED 2017/10/17]",
				"langUid": 1987,
				"de_DE": "<<A<<[CHANGED 2017/10/13]"
			},
			"description": {
				"en_US": "This shell is used as metal coating to enhance a weapons durability.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "这个贝壳可以用来当作武器镀层，提升武器的耐久度。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "金属コーティングに使われる甲羅。武器の耐久性を強化する。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "이 껍질은 무기의 내구성을 높이기 위한 금속 코팅으로 사용됩니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1988
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 1000,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 110,
			"name": {
				"en_US": "Samurai Shell",
				"fr_FR": "undefined",
				"zh_CN": "武士贝<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "サムライ・シェル<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "사무라이 껍질<<A<<[CHANGED 2017/10/17]",
				"langUid": 1989,
				"de_DE": "<<A<<[CHANGED 2017/10/13]"
			},
			"description": {
				"en_US": "This shell is used as metal coating to enhance a weapons sharpness.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "这个贝壳可以用来当作武器镀层，提升武器的锋利度。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "金属コーティングに使われる甲羅。武器の切れ味を強化する。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "이 껍질은 무기의 예리함을 높이기 위한 금속 코팅으로 사용됩니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1990
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 1000,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 111,
			"name": {
				"en_US": "Sharp Splitter",
				"fr_FR": "undefined",
				"zh_CN": "穿岩碎片<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "シャープスプリッター<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "뾰족한 무기조각<<A<<[CHANGED 2017/10/17]",
				"langUid": 1991,
				"de_DE": "<<A<<[CHANGED 2017/10/13]"
			},
			"description": {
				"en_US": "A piece from a broken blade. Even in this state it can cut through anything.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "破损之剑上的一块碎片。尽管如此，还是无比锋利。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "壊れた刀身の破片。ただの破片となったこの状態ですら、断ち切れないものはないという。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "부러진 날에서 나온 조각입니다. 이런 상태에서도 어떤 것이든 벨 수 있습니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1992
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 1000,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 112,
			"name": {
				"en_US": "Hoverpad",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "浮空板<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "ホバーパッド<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "호버패드<<A<<[CHANGED 2017/10/17]",
				"langUid": 1993
			},
			"description": {
				"en_US": "This mysterious object magically enables the \\v[combat.name.forest/panda] to hover above the ground.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "让\\v[combat.name.forest/panda]能够浮空的神秘装置。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "この謎の物体のおかげで、\\v[combat.name.forest/panda]はまるで魔法のように空中に浮かぶことができる。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "이 이상한 물건은 \\v[combat.name.forest/panda]가 마법처럼 떠 있을 수 있도록 만들어줍니다.<<C<<It's not actual magic, is it?<<A<<[CHANGED 2017/10/17]",
				"langUid": 1994
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 1000,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 113,
			"name": {
				"en_US": "Sticky Web",
				"fr_FR": "undefined",
				"zh_CN": "黏蛛网<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "ベトつく巣<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "끈적거리는 거미줄<<A<<[CHANGED 2017/10/17]",
				"langUid": 1995,
				"de_DE": "<<A<<[CHANGED 2017/10/13]"
			},
			"description": {
				"en_US": "This web is so sticky that it can be used as an all-purpose glue.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "很黏，能用来当胶水。<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "この巣は粘着性が高いため、万能のりとして愛用されている。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "너무 끈적거려서 다목적 풀로도 쓸 수 있겠군요.<<A<<[CHANGED 2017/10/17]",
				"langUid": 1996
			},
			"type": "TRADE",
			"rarity": 1,
			"cost": 1000,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 39,
			"name": {
				"en_US": "Star Shade",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "星痕<<A<<[CHANGED 2017/10/10]",
				"ja_JP": "スターシェード<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "스타 셰이드<<A<<[CHANGED 2017/10/17]",
				"langUid": 1997
			},
			"description": {
				"en_US": "Grants passage to \\c[3]\\v[area.forest.name]\\c[0].",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "开启通往\\c[3]\\v[area.forest.name]\\c[0]的道路。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "\\c[3]\\v[area.forest.name]\\c[0]への通行許可証。<<A<<[CHANGED 2017/11/27]",
				"ko_KR": "\\c[3]\\v[area.forest.name]\\c[0]으로 가는 길을 제공합니다.<<A<<[CHANGED 2017/11/16]",
				"langUid": 1998
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"name": {
				"en_US": "Hardhead Hat",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "硬头帽<<A<<[CHANGED 2017/10/13]",
				"ja_JP": "石頭帽<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "돌머리 모자<<A<<[CHANGED 2017/10/17]",
				"langUid": 1999
			},
			"description": {
				"en_US": "It's a hardened hat for your head. Not the most refined design but nigh indestructable.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "能保护头部的特制硬帽。虽然不好看，但是防御力极强。<<A<<[CHANGED 2017/10/13]",
				"ja_JP": "頭部を守る硬い帽子。デザインはいまいちだが、破壊されることはほぼない。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "머리에 쓰는 경화된 모자입니다. 세련된 디자인은 아니지만, 강도만큼은 거의 무적입니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 2000
			},
			"type": "EQUIP",
			"cost": 83000,
			"level": 55,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1.1,
					1.1,
					1.1,
					1.1
				],
				"defense": 84,
				"focus": 62
			},
			"properties": {
				"GUARD_SP": 1.1
			},
			"rarity": 2,
			"order": 33,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 39,
			"name": {
				"en_US": "Survivor's Blade",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "生存者之剑<<A<<[CHANGED 2017/10/13]",
				"ja_JP": "サバイバルナイフ<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "생존자의 칼<<A<<[CHANGED 2017/10/17]",
				"langUid": 2001
			},
			"description": {
				"en_US": "A versatile tool used for cutting, cooking, killing... a true lifesaver and -taker!",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "能够用于切割，烹饪，杀戮...乃是野外生存的真正法器。<<A<<[CHANGED 2017/10/13]",
				"ja_JP": "切断、料理、殺害、何でもござれの万能ナイフ…ある時は命の恩人、またある時は命の取立人！<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "다재다능한 도구로 자르기, 요리, 죽이기 등에 쓸 수 있습니다. <<A<<[CHANGED 2017/10/17]",
				"langUid": 2002
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 80000,
			"level": 54,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 111,
				"attack": 89,
				"defense": 42
			},
			"properties": {
				"MELEE_DMG": 1.2,
				"HP_REGEN": 1.03
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 40,
			"name": {
				"en_US": "Marksmen Trigger",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "狙击枪<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "マークスマンライフル<<A<<[CHANGED 2017/11/27]",
				"ko_KR": "명사수의 방아쇠<<A<<[CHANGED 2017/11/30]",
				"langUid": 2003
			},
			"description": {
				"en_US": "Exceptional ranged weapon, originally used under the command of a certain \"Mark\".",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "极强的远程武器，千米之外取人性命。<<A<<[CHANGED 2017/10/13]",
				"ja_JP": "桁外れの性能を誇る遠距離武器。「マーク」という名の指揮官の部下が使用したという。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "초장거리 무기로, 원래는 특정한 \"명\"이 있어야만 쓸 수 있었습니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 2004
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 83000,
			"level": 55,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 101,
				"focus": 45
			},
			"properties": {
				"RANGED_DMG": 1.2,
				"AIM_SPEED": 1.1
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 41,
			"name": {
				"en_US": "Panzer Fist",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "熊猫拳<<A<<[CHANGED 2017/10/13]",
				"ja_JP": "パンザー・フィスト<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "판저 피스트<<A<<[CHANGED 2017/10/17]",
				"langUid": 2005
			},
			"description": {
				"en_US": "An armored fist that is very reliable. Might be the reason for Pandza's lack of arms.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "很结实的拳套。估计机械熊猫的手都没了就是因为这个。<<A<<[CHANGED 2017/10/13]",
				"ja_JP": "とても頼りになる、装甲付きの拳。パンザの腕がないのはこの武器のせいかもしれない。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "신뢰성 높은, 잘 무장된 장갑입니다. 판짜가 팔이 없는 이유를 알겠군요.<<A<<[CHANGED 2017/10/17]",
				"langUid": 2006
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 87000,
			"level": 56,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 69,
				"defense": 82
			},
			"properties": {
				"SPIKE_DMG": 1.25,
				"GUARD_STRENGTH": 1.25
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Shadowy Cloak",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "影子披风<<A<<[CHANGED 2017/10/13]",
				"ja_JP": "シャドウクローク<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "그림자 망토<<A<<[CHANGED 2017/10/17]",
				"langUid": 2007
			},
			"description": {
				"en_US": "Dark cloak of uncertain form. Very useful for covert operations.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "形状不定的一款黑暗披风。潜行者的最爱。<<A<<[CHANGED 2017/10/13]",
				"ja_JP": "不定形の黒い外套。隠密作戦に重宝する。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "특정한 형태가 없는 검은 망토입니다. 비밀 임무에 유용합니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 2008
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 83000,
			"level": 55,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1.1,
					1
				],
				"hp": 813,
				"defense": 29,
				"focus": 34
			},
			"properties": {
				"CRITICAL_DMG": 1.25,
				"DASH_INVINC": 1.1
			},
			"order": 27,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"name": {
				"en_US": "Plated Plate",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "双层板甲<<A<<[CHANGED 2017/10/13]",
				"ja_JP": "メッキプレート<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "도금된 갑옷<<A<<[CHANGED 2017/10/17]",
				"langUid": 2009
			},
			"description": {
				"en_US": "Extremely heavy body armor with twice the expected plating. Almost impenetrable.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "使用了双层护甲的超级重甲。几乎无法击穿。<<A<<[CHANGED 2017/10/13]",
				"ja_JP": "通常の2倍近くの量のメッキ加工が施された、非常に重いよろい。ほとんどの攻撃をはじき返す。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "대단히 무거운 갑옷으로 철판을 두른 느낌입니다. 거의 뚫을 수 없습니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 2010
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 87000,
			"level": 56,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 558,
				"defense": 95
			},
			"properties": {
				"GUARD_STRENGTH": 1.15,
				"STUN_THRESHOLD": 1.02,
				"DASH_INVINC": 0.75
			},
			"order": 28,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 25,
			"name": {
				"en_US": "Bamboots",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "竹鞋<<A<<[CHANGED 2017/10/13]",
				"ja_JP": "バンブーツ<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "대나무 부츠<<A<<[CHANGED 2017/10/17]",
				"langUid": 2011
			},
			"description": {
				"en_US": "Footwear sewn together from some of the sturdiest plants of nature.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "使用坚实的天然材料缝制的鞋子。<<A<<[CHANGED 2017/10/13]",
				"ja_JP": "自然の植物で随一の頑丈性を誇ると言われる、竹を縫い合わせて作ったブーツ。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "자연에서 가장 억센 식물들을 기워 만든 신발입니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 2012
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 83000,
			"level": 55,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1.1
				],
				"hp": 777,
				"defense": 26,
				"focus": 42
			},
			"properties": {
				"COND_HEALING": 1.35,
				"DASH_INVINC": 1.25
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 26,
			"name": {
				"en_US": "Brave Anchors",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "勇气之锚<<A<<[CHANGED 2017/10/13]",
				"ja_JP": "ブレイブアンカー<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "용감한 닻<<A<<[CHANGED 2017/10/17]",
				"langUid": 2013
			},
			"description": {
				"en_US": "Heavy boots worn by warriors that conquered their fear and embraced the danger.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "击败了恐惧，敢于直面危险的勇士所穿的重靴。<<A<<[CHANGED 2017/10/13]",
				"ja_JP": "恐怖に打ち勝ち、危険を受け入れて戦った戦士が装備したと言われる重いブーツ。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "두려움을 정복하고 위험에 당당히 맞선 전사들이 신었던 무거운 장화입니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 2014
			},
			"type": "EQUIP",
			"rarity": 2,
			"cost": 87000,
			"level": 56,
			"icon": "item-shoe",
			"equipType": "FEET",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 601,
				"defense": 60,
				"focus": 30
			},
			"properties": {
				"CROSS_COUNTER": 1.15,
				"STUN_THRESHOLD": 1.05
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 43,
			"name": {
				"en_US": "Shuddering Cleaver",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "颤抖砍刀<<A<<[CHANGED 2017/10/13]",
				"ja_JP": "鮮血の肉切り包丁<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "전율하는 식칼<<A<<[CHANGED 2017/10/17]",
				"langUid": 2015
			},
			"description": {
				"en_US": "An unstable weapon that seems to purely follow wild, aggressive instincts.",
				"de_DE": "<<A<<[CHANGED 2017/10/13]",
				"fr_FR": "undefined",
				"zh_CN": "一把不稳定的武器，拿着它都觉得杀意上涌。<<A<<[CHANGED 2017/10/13]",
				"ja_JP": "危険で異常な本能のみを追い求めるとされる、不安定な武器。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "야만적이고 공격적인 본능만을 따르는 것처럼 보이는 불안정한 무기입니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 2016
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 58,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 115,
				"defense": 19,
				"focus": 19
			},
			"properties": {
				"AIM_STABILITY": 0.8,
				"GUARD_STRENGTH": 0.75,
				"ASSAULT": 1.5
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 32,
			"name": {
				"en_US": "Tengu Mask",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "天狗面具<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "テング・マスク<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "덴구 가면<<A<<[CHANGED 2017/10/17]",
				"langUid": 2017
			},
			"description": {
				"en_US": "A red mask with an extraordinarily long nose. Supposedly contains Ancient wisdom.",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "一个有着长鼻子的红面具。据说包含着古代的智慧。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "異常に長い鼻の付いた赤いマスク。古代人の知恵が宿っているとされている。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "아주 긴 코를 가진 붉은 가면. 고대의 지식을 가지고 있습니다. 아마도.<<A<<[CHANGED 2017/10/17]",
				"langUid": 2018
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 53,
			"icon": "item-helm",
			"equipType": "HEAD",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"attack": 13,
				"focus": 125
			},
			"properties": {
				"XP_PLUS": 1.3
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 42,
			"name": {
				"en_US": "Sonic Spike",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "音速长枪<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "ソニックスパイク<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "음속 창<<A<<[CHANGED 2017/10/17]",
				"langUid": 2019
			},
			"description": {
				"en_US": "Incredibly thin and flexible weapon than can penetrate at the speed of sound.",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "细长又灵活的武器，能够以音速穿透敌人。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "非常に薄く、柔軟性に優れた武器。音速で敵を貫くことができる。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "엄청나게 얇고 유연한 무기로 소리의 속도로 관통할 수 있습니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 2020
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 57,
			"icon": "item-sword",
			"equipType": "ARM",
			"params": {
				"elemFactor": [
					1,
					1,
					1,
					1
				],
				"hp": 100,
				"attack": 71,
				"focus": 84
			},
			"properties": {
				"BREAK_DMG": 1.15,
				"CRITICAL_DMG": 1.5
			},
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 121,
			"name": {
				"en_US": "Ambigious Rod",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "未知棒<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "ミステリーロッド<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "모호하지 않은 막대<<A<<[CHANGED 2017/10/17]",
				"langUid": 2021
			},
			"description": {
				"en_US": "A long and flexible rod. Has a good grip but you can't quite determine it's potential use.",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "又长又灵活的棒子。握上去感觉不错，但是用途未知。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "よくしなる、長い棒。手によく馴染むものの、本来の用途が何なのかはわからない。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "길고 유연한 막대. 잡기는 좋지만 어디에 쓰는지는 잘 모르겠습니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 2022
			},
			"type": "TRADE",
			"rarity": 3,
			"cost": 0,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 122,
			"name": {
				"en_US": "Moistured Line",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "湿绳<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "湿った縄<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "촉촉한 줄<<A<<[CHANGED 2017/10/17]",
				"langUid": 2023
			},
			"description": {
				"en_US": "A long, resilient line that shows signs of watery influence.",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "一条坚韧的绳子，上面有水迹。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "弾力性のある長い縄。水による影響が見受けられる。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "길고 탄력 있는 줄로 물기가 있습니다.<<A<<[CHANGED 2017/10/17]",
				"langUid": 2024
			},
			"type": "TRADE",
			"rarity": 3,
			"cost": 0,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 123,
			"name": {
				"en_US": "Rusty Hook",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "锈钩<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "サビ付きフック<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "녹슨 갈고리<<A<<[CHANGED 2017/10/17]",
				"langUid": 2025
			},
			"description": {
				"en_US": "A long, jagged hook that is covered in rust. Is it treasure or just bait?",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "一个长长的弯钩，上面布满了锈迹。这究竟是宝藏还是某人的替身？<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "サビに覆われた、ギザギザの長いフック。宝物か、それともただの釣り針か？<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "길고 뾰족한 갈고리로 녹이 슬었습니다. 보물일까요, 그냥 떡밥일까요?<<A<<[CHANGED 2017/10/17]",
				"langUid": 2026
			},
			"type": "TRADE",
			"rarity": 3,
			"cost": 0,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"name": {
				"en_US": "Bluefiber Robe",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "蓝罩袍<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "藍糸のローブ<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "파란섬유 로브<<A<<[CHANGED 2017/10/17]",
				"langUid": 2027
			},
			"description": {
				"en_US": "An old robe made from empowered plant fiber. It's shimmering in a light blue.",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "一件用附魔植物纤维制造的旧罩袍。发出淡蓝色的光。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "エネルギーを宿した植物繊維で作られた古いローブ。キラキラと青く光る。<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "강화된 식물 섬유로 만들어진 낡은 로브입니다. 은은한 하늘색으로 빛나는군요.<<A<<[CHANGED 2017/10/17]",
				"langUid": 2028
			},
			"type": "EQUIP",
			"rarity": 3,
			"cost": 2,
			"level": 51,
			"icon": "item-belt",
			"equipType": "TORSO",
			"params": {
				"elemFactor": [
					0.75,
					1,
					1,
					1
				],
				"hp": 1069,
				"defense": 22
			},
			"properties": {
				"HP_REGEN": 1.05
			},
			"order": 26,
			"effect": {
				"sheet": "",
				"name": null
			},
			"noTrack": false
		},
		{
			"order": 1,
			"name": {
				"en_US": "Toggle Test",
				"fr_FR": "undefined",
				"zh_CN": "切换测试<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "トグルテスター<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "전환 테스트<<A<<[CHANGED 2017/11/16]",
				"langUid": 2029,
				"de_DE": "<<A<<[CHANGED 2017/12/14]"
			},
			"description": {
				"en_US": "This toggles something, what? I'm not sure, I guess a var.",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "到底会切换什么呢？切换什么呢？我也不知道，应该是个变量吧。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "トグルテストのためのアイテム<<A<<[CHANGED 2017/11/04]",
				"ko_KR": "이걸로 뭔가를 전환할 수 있다고요? 글쎄요.<<A<<[CHANGED 2017/11/16]",
				"langUid": 2030
			},
			"type": "TOGGLE",
			"rarity": 0,
			"cost": 1000,
			"level": 1,
			"icon": "item-toggle",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 62,
			"name": {
				"en_US": "Stone Key",
				"fr_FR": "undefined",
				"zh_CN": "石质钥匙<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "石の鍵<<A<<[CHANGED 2017/11/27]",
				"ko_KR": "돌로 만든 열쇠<<A<<[CHANGED 2017/11/16]",
				"langUid": 2031,
				"de_DE": "<<A<<[CHANGED 2017/12/14]"
			},
			"description": {
				"en_US": "This is literally just an stone carved to look like a key.",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "一块被雕凿的像钥匙的石头。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "鍵のような形に彫られた、ただの普通の石だ。<<A<<[CHANGED 2017/11/27]",
				"ko_KR": "말 그대로 열쇠 모양으로 깎아 만든 돌입니다.<<A<<[CHANGED 2017/11/16]",
				"langUid": 2032
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 2,
			"name": {
				"en_US": "Circuit Override",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "",
				"zh_CN": "电路覆写<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "サーキットオーバーライド<<A<<[CHANGED 2017/12/11]",
				"ko_KR": "회로 무효 아이템<<A<<TODO 0.9.8",
				"langUid": 2033
			},
			"description": {
				"en_US": "Can be used to reset \\c[3]one Circuit-Tree\\c[0] in \\c[3]Rookie Harbor - Information B1 (Combat Arena)\\c[0].",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "",
				"zh_CN": "可以在\\c[3]新手港 - 用户指导 B1（战斗区域）\\c[0]用于重置\\c[3]一个电路树\\c[0]。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "\\c[3]サーキットツリーを1つ\\c[0]リセットすることができる。\\c[3]ルーキーハーバーのインフォハブ地下（闘技場）\\c[0]で使用する。<<A<<[CHANGED 2017/12/14]",
				"ko_KR": "\\c[3]초보자 항구 - 정보 B1 (전투 경기장)\\c[0]에서 이것을 사용해 \\c[3]회로 트리 하나\\c[0]를 초기화 할 수 있습니다.<<A<<[CHANGED 2017/12/13]",
				"langUid": 2034
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 73,
			"name": {
				"en_US": "F.A.I.R. Device",
				"fr_FR": "",
				"zh_CN": "F.A.I.R. 装置<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "F.A.I.R.デバイス<<A<<[CHANGED 2017/12/11]",
				"ko_KR": "F.A.I.R. 장치<<A<<TODO 0.9.8",
				"langUid": 2035,
				"de_DE": "<<A<<[CHANGED 2017/12/14]"
			},
			"description": {
				"en_US": "The \\c[3]Frequency And Impulse Rattler\\c[0] used to find the source of the Gaia's Garden Infection.",
				"de_DE": "",
				"fr_FR": "undefined",
				"zh_CN": "这个\\c[3]频率与脉冲寻找器（F.A.I.R.）\\c[0]可以用于寻找盖亚花园的感染源。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "\\c[3]フリークエンシー・アンド・インパルス・ラトラー\\c[0]の略。ガイア・ガーデンの襲撃の原因を特定するのに使用する。<<A<<[CHANGED 2017/12/11]",
				"ko_KR": "\\c[3]주파수와 충격파의 딸랑이\\c[0]는 가이아의 정원의 침략 원인을 찾는 데 사용됩니다.<<A<<TODO 0.9.8",
				"langUid": 2036
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 57,
			"name": {
				"en_US": "Smelter Parts",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "熔炉部件<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "溶鉱炉の部品<<A<<[CHANGED 2017/12/11]",
				"ko_KR": "용광로 부품<<A<<TODO 0.9.8",
				"langUid": 2037
			},
			"description": {
				"en_US": "Hot parts of a generator that was presumably even hotter. Needed for advanced metalwork.",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "某个高热发电机的滚烫零部件。可以用于高级冶炼。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "溶鉱炉の部品。熱を帯びており、溶鉱炉自体はもっと高熱だったと思われる。高度な金属加工に必要。<<A<<[CHANGED 2017/12/11]",
				"ko_KR": "아마 본체보다 더 뜨거운 발전기 부품입니다. 고급 금속 가공에 필요합니다.<<A<<TODO 0.9.8",
				"langUid": 2038
			},
			"type": "KEY",
			"rarity": 0,
			"level": 1,
			"icon": "item-key",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		},
		{
			"order": 73,
			"name": {
				"en_US": "Marinated Meat",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "卤肉<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "肉のマリネ<<A<<[CHANGED 2017/12/11]",
				"ko_KR": "양념장이 발린 고기<<A<<TODO 0.9.8",
				"langUid": 2039
			},
			"description": {
				"en_US": "Raw meat, prepared with honey, fruits and spices. Now it just needs a bit of heat.",
				"de_DE": "<<A<<[CHANGED 2017/12/14]",
				"fr_FR": "undefined",
				"zh_CN": "使用蜂蜜，水果和香料腌制的卤肉。就差烤了。<<A<<[CHANGED 2017/12/12]",
				"ja_JP": "ハチミツ、果物、スパイスで下ごしらえした生肉。後は過熱すればできあがり。<<A<<[CHANGED 2017/12/11]",
				"ko_KR": "꿀, 과일, 향신료와 함께 준비된 생고기입니다. 이제 굽기만 하면 되겠군요.<<A<<TODO 0.9.8",
				"langUid": 2040
			},
			"type": "TRADE",
			"rarity": 2,
			"cost": 500,
			"level": 1,
			"icon": "item-trade",
			"noTrack": false,
			"effect": {
				"sheet": "",
				"name": null
			}
		}
	]
}