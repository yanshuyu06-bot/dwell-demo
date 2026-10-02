# 小兽素材说明

这个目录里的 7 个 SVG **是本展示版自己画的原创占位素材**，
不是从小屋本体搬过来的。

## 为什么不用小屋本体的那一套

小屋本体用的是一套第三方卡通素材（`clawd-on-desk`，授权 GNU AGPL-3.0）。
私有仓库里内部使用没有问题，但**公开仓库里会发生授权冲突**：
AGPL 是会传染的强 copyleft，一旦随公开仓库分发，整份前端代码都会被这个许可证绑住。

所以展示版把美术素材换成了自制版本，**文件名一个都没改**：

```
clawd-idle-follow.svg          安静地待着（看着你）
clawd-working-thinking.svg     在想事情
clawd-working-typing.svg       在打字
clawd-happy.svg                很高兴
clawd-idle-doze.svg            有点困了
clawd-sleeping.svg             睡着了
clawd-react-double-jump.svg    蹦了一下
```

这样 `index.html` 里那行 `petImg.src = 'pet/' + PET[state]` 一个字都不用动。

## 授权

这 7 个 SVG 与 `index.html` 同属本仓库，授权见仓库根目录的 `LICENSE`。
没有引用任何第三方素材，因此不需要额外的版权声明。
