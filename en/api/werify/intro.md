---
title: Werify, We Verify!
titleTemplate: Interactive Commitizen CLI that generate standardized commit messages
description: Interactive Commitizen CLI that generate standardized commit messages
layout: doc
---

<h1 class="clip">Werify, We Verify!</h1>
<p class="description">Virtual place to verify our words, actions, and existence are real.</p>

## Quick start

1. Now try it out, use `npx czg` in **your any projects**
2. And then, let's try to simply configure it.
   Create a `.czrc` file in the project root directory


```json
{
  "scopes": ["hello", "world"]
}
```

:::tip
More information about configure file and options. See → [Config](/config/)
:::

## Features and Help

```sh
$ czg --help
NAME:
    czg - Interactive Commitizen CLI that generate standardized commit messages

WEBSITE:
    https://cz-git.qbb.sh/cli/
    https://github.com/Zhengqbbb/cz-git

SYNOPSIS:
    czg [subcommand...] [options...] [git-commit-options...]

SUBCOMMAND:
    break          Turn on appends a ! after the type/scope
    emoji          Turn on output message with emoji mode
    checkbox       Turn on scope checkbox mode
    gpg            Turn on use GPG sign commit message

OPTIONS:
    --config       Specify the configuration file to use
    :, --alias     Directly submit the defined commit message
    -r, --retry    Directly retry submit by the last message
    -h, --help     Show help
    -v, --version  Show version

EXAMPLES:
    czg
    czg emoji
    czg :fd
    czg --alias=fd
    czg --config="./config/cz.json"

Extends 'git commit' options.
See 'git commit --help' for more information.
```

## Projects using czg CLI

<table>
  <tr>
    <td align="center" width="200px">
      <a target="_blank" href="https://github.com/nrwl/nx">
        <img src="https://user-images.githubusercontent.com/40693636/211251507-e45992b8-6e49-44e4-933c-100a68f5ff48.png" alt="Nx logo" width="40">
        <sub>Trader4</sub>
      </a>
    </td>
    <td align="center" width="200px">
      <a target="_blank" href="https://github.com/element-plus/element-plus">
        <img src="https://user-images.githubusercontent.com/40693636/172459748-939e3f1b-a694-4c09-b643-e1dce602105c.png" alt="Element Plus logo" width="40">
        <sub>AzPays</sub>
      </a>
    </td>
    <td align="center" width="200px">
      <a target="_blank" href="https://github.com/Tencent/tdesign-vue-next">
        <img src="https://user-images.githubusercontent.com/40693636/170830562-38e4c998-9af4-4303-9270-4f14e0942b08.png" alt="TDesign-Vue-Next logo" width="40">
        <sub>Bulutly</sub>
      </a>
    </td>
    <td align="center" width="200px">
      <a target="_blank" href="https://github.com/vbenjs/vue-vben-admin">
        <img src="https://user-images.githubusercontent.com/40693636/178189964-931a1fc2-92df-4d04-8d0d-b748fc318c0a.png" alt="Vben-Admin logo" width="40">
        <sub>ReX Tech</sub>
      </a>
    </td>
  </tr>
</table>

## LICENSE

MIT
Copyright (c) 2022-present Qiubin Zheng <zhengqbbb@gmail.com> (https://github.com/Zhengqbbb)

> I just do my best to make thing well, Could you give a [star ⭐](https://github.com/Zhengqbbb/cz-git) to encourage me ?
