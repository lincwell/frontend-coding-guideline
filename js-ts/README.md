<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [JS and TS Coding Guideline](#js-and-ts-coding-guideline)
  - [ファイルの相互参照の禁止](#%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E7%9B%B8%E4%BA%92%E5%8F%82%E7%85%A7%E3%81%AE%E7%A6%81%E6%AD%A2)
    - [メリット](#%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88)
    - [コード例 - bad👎](#%E3%82%B3%E3%83%BC%E3%83%89%E4%BE%8B---bad)
    - [コード例 - good👍](#%E3%82%B3%E3%83%BC%E3%83%89%E4%BE%8B---good)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# JS and TS Coding Guideline

wip

## ファイルの相互参照の禁止

- 相互参照があると依存関係が複雑になる

### メリット

- コードの可読性向上

### コード例 - bad👎

```typescript

// page.tsx

import { Component } from component

type ComponentType = {}

const Page = () => {

}

// component.tsx

import { type ComponentType } from page

const Component = () => {

}

```

### コード例 - good👍

```typescript

// page.tsx

import { Component, type ComponentType } from component

const Page = () => {

}

// component.tsx

type ComponentType = {}

const Component = () => {

}

```
