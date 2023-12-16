# VitePress文档入门

本页展示了`VitePress`提供的一些内置扩展。

## 高亮

`VitePress`高亮依赖于[Shikiji](https://github.com/antfu/shikiji)

**输入**

```md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```
**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义提示内容

**输入**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**输出**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## Emoji 🎉

**输入**

```
:tada: :100:
```

**输出**

🎉 💯

[全部的列表地址](https://github.com/markdown-it/markdown-it-emoji/tree/master/lib/data)

```json
"100": "💯",
 "1234": "🔢",
 "grinning": "😀",
 "smiley": "😃",
 "smile": "😄",
 "grin": "😁",
 "laughing": "😆",
 "satisfied": "😆",
 "sweat_smile": "😅",
 "rofl": "🤣",
 "joy": "😂",
 "slightly_smiling_face": "🙂",
 "upside_down_face": "🙃",
 "melting_face": "🫠",
 "wink": "😉",
 "blush": "😊",
 "innocent": "😇",
 "smiling_face_with_three_hearts": "🥰",
 "heart_eyes": "😍",
 "star_struck": "🤩",
 "kissing_heart": "😘",
 "kissing": "😗",
 "relaxed": "☺️",
 "kissing_closed_eyes": "😚",
 "kissing_smiling_eyes": "😙",
 "smiling_face_with_tear": "🥲",
 "yum": "😋",
 "stuck_out_tongue": "😛",
 "stuck_out_tongue_winking_eye": "😜",
 "zany_face": "🤪",
 "stuck_out_tongue_closed_eyes": "😝",
 "money_mouth_face": "🤑",
 "hugs": "🤗",
 "hand_over_mouth": "🤭",
 "face_with_open_eyes_and_hand_over_mouth": "🫢",
 "face_with_peeking_eye": "🫣",
 "shushing_face": "🤫",
 "thinking": "🤔",
 "saluting_face": "🫡",
 "zipper_mouth_face": "🤐",
 "raised_eyebrow": "🤨",
 "neutral_face": "😐",
 "expressionless": "😑",
 "no_mouth": "😶",
 "dotted_line_face": "🫥",
 "face_in_clouds": "😶‍🌫️",
 "smirk": "😏",
 "unamused": "😒",
 "roll_eyes": "🙄",
 "grimacing": "😬",
 "face_exhaling": "😮‍💨",
 "lying_face": "🤥",
 "shaking_face": "🫨",
 "relieved": "😌",
 "pensive": "😔",
 "sleepy": "😪",
 "drooling_face": "🤤",
 "sleeping": "😴",
 "mask": "😷",
 "face_with_thermometer": "🤒",
 "face_with_head_bandage": "🤕",
 "nauseated_face": "🤢",
 "vomiting_face": "🤮",
 "sneezing_face": "🤧",
 "hot_face": "🥵",
 "cold_face": "🥶",
 "woozy_face": "🥴",
 "dizzy_face": "😵",
 "face_with_spiral_eyes": "😵‍💫",
 "exploding_head": "🤯",
 "cowboy_hat_face": "🤠",
 "partying_face": "🥳",
 "disguised_face": "🥸",
 "sunglasses": "😎",
 "nerd_face": "🤓",
 "monocle_face": "🧐",
 "confused": "😕",
 "face_with_diagonal_mouth": "🫤",
 "worried": "😟",
 "slightly_frowning_face": "🙁",
 "frowning_face": "☹️",
 "open_mouth": "😮",
 "hushed": "😯",
 "astonished": "😲",
 "flushed": "😳",
 "pleading_face": "🥺",
 "face_holding_back_tears": "🥹",
 "frowning": "😦",
 "anguished": "😧",
 "fearful": "😨",
 "cold_sweat": "😰",
 "disappointed_relieved": "😥",
 "cry": "😢",
 "sob": "😭",
 "scream": "😱",
 "confounded": "😖",
 "persevere": "😣",
 "disappointed": "😞",
 "sweat": "😓",
 "weary": "😩",
 "tired_face": "😫",
 "yawning_face": "🥱",
 "triumph": "😤",
 "rage": "😡",
 "pout": "😡",
 "angry": "😠",
 "cursing_face": "🤬",
 "smiling_imp": "😈",
 "imp": "👿",
 "skull": "💀",
 "skull_and_crossbones": "☠️",
 "hankey": "💩",
 "poop": "💩",
 "shit": "💩",
 "clown_face": "🤡",
 "japanese_ogre": "👹",
 "japanese_goblin": "👺",
 "ghost": "👻",
 "alien": "👽",
 "space_invader": "👾",
 "robot": "🤖"
```
