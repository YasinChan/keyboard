<script setup lang="ts">
// components
import TypingKeyboard from '@/view/TypingKeyboard.vue';

// stores
import { useConfigStore } from '@/store/config';
import { storeToRefs } from 'pinia';

// svg
import IcoCapsLock from '@/assets/svg/caps-lock.svg';
import IcoGithub from '@/assets/svg/github.svg';
import IcoIntroduce from '@/assets/svg/introduce.svg';
import IcoDocument from '@/assets/svg/document.svg';

const useConfig = useConfigStore();

const { onlyShowMain, capsLockOn } = storeToRefs(useConfig);

</script>

<template>
<!--  <div class="y-mobile-show">-->
<!--    <div class="y-info" :class="[onlyShowMain ? 'y-info__disabled' : '']">-->
<!--      <a href="/" class="y-info__title main-color">Typing</a>-->
<!--    </div>-->
<!--    <h1>一个简约风格的可自定义主题、可切换字体的打字记录和键盘测试网站。</h1>-->
<!--    <h2>欢迎使用电脑端访问该页面，体验 Typing 的更多功能！</h2>-->
<!--    <img src="https://file.yasinchan.com/MCOD5rboejy8aB14T97iybJsYbPt2oAV/2272970956.png" alt="" />-->
<!--    <img src="https://file.yasinchan.com/OuP7VwJmVyGF8SVYI1GBAf64w0vkR9VF/741427767.png" alt="" />-->
<!--    <img src="https://file.yasinchan.com/mWeNzOLyIAIqhDdjxeOWdIoKvbQIBmfo/2343042681.png" alt="" />-->
<!--    <img src="https://file.yasinchan.com/3mJW6cYdhhonSKsrLNIrPRescfb9202i/1757293763.png" alt="" />-->
<!--  </div>-->
  <div class="y-app">
    <header>
      <div class="y-info" :class="[onlyShowMain ? 'y-info__disabled' : '']">
        <a href="/" class="y-info__title main-color">Typing</a>
      </div>
    </header>

    <TypingKeyboard></TypingKeyboard>

    <Transition name="menu">
      <footer v-show="!onlyShowMain" class="flex-center">
        <a
            class="flex-center--y y-app__footer"
            href="https://github.com/YasinChan/typing"
            target="_blank"
        >
          <IcoGithub></IcoGithub>
          <span>源码</span>
        </a>
        <a
            class="flex-center--y y-app__footer"
            href="https://yasinchan.com/tags/typing/"
            target="_blank"
        >
          <IcoDocument></IcoDocument>
          <span>技术</span>
        </a>
        <a
            class="flex-center--y y-app__footer"
            href="https://www.bilibili.com/video/BV1ci4y1s73q"
            target="_blank"
        >
          <IcoIntroduce></IcoIntroduce>
          <span>介绍</span>
        </a>
      </footer>
    </Transition>
  </div>

  <Transition name="menu">
    <div v-if="capsLockOn" class="y-app__caps-lock flex-center--y">
      <IcoCapsLock></IcoCapsLock>
      <span>大写开启</span>
    </div>
  </Transition>
</template>

<style lang="scss">
.y-remind {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: $label-white;
  font-weight: bold;
  background: $main-color;
  cursor: pointer;
  svg {
    fill: $label-white;
    width: 16px;
    margin-left: 20px;
  }
}
.y-app {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 64px);
}
.y-mobile-show {
  color: $gray-08;
  h1 {
    margin-top: 30px;
    font-size: 22px;
  }
  h2 {
    color: $gray-06;
    font-size: 20px;
    margin-top: 20px;
  }
  img {
    width: 100%;
    margin-top: 40px;
  }
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 38px;
}
main,
.y-main {
  flex: 1;
}
footer {
  font-size: 14px;
  a,
  > span {
    margin-right: 20px;
  }
  svg {
    width: 14px;
    height: 14px;
    fill: $gray-02;
    margin-right: 4px;
  }
  span {
    color: $gray-02;
  }
}
.y-app__caps-lock {
  position: fixed;
  z-index: 1;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: $label-white;
  font-size: 14px;
  font-weight: bold;
  background: $main-color;
  border-radius: 2px;
  cursor: pointer;
  padding: 0 8px;
  svg {
    margin-right: 4px;
    fill: $label-white;
    width: 20px;
  }
}
.y-info {
  display: flex;
  align-items: center;
  transition: opacity 0.3s ease;
}
.y-info__disabled {
  opacity: 0.3;
}
.y-info__logo {
  width: 30px;
  height: 30px;
}
.y-info__title {
  font-family: zhankugaoduanhei-min;
  margin-left: 6px;
  display: inline-block;
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
}

.y-menu {
  display: flex;
  align-items: center;
  color: $gray-08;
}
.y-menu__item {
  margin-left: 12px;
  cursor: pointer;
  letter-spacing: 1px;
  transition: color 0.5s;
  svg {
    transition: all 0.5s;
  }
  &:hover {
    color: $main-color;
    svg {
      fill: $main-color;
    }
  }
  svg {
    fill: $gray-08;
    width: 18px;
    height: 18px;
  }
  &:not(.y-menu__item--no-line)::after {
    transition: all 0.1s;
    position: absolute;
    content: '';
    width: 0;
    height: 2px;
    border-radius: 2px;
    background: $main-color;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
  &.router-link-active {
    color: $main-color;
    position: relative;
    svg {
      fill: $main-color;
    }
    &::after {
      width: 30px;
    }
  }
  &.y-menu__item-auth {
    padding: 0;
  }
  &.y-menu__item--active {
    color: $main-color;
  }
}
.y-menu__item--blink {
  animation: title-blink 0.8s infinite alternate;
}
.y-menu__change {
  cursor: pointer;
  border-radius: 2px;
  padding: 10px 15px;
  display: block;
  transition: all 0.2s;
  color: inherit;
  &:hover {
    background-color: $main-color;
    color: $label-white;
  }
  &.y-menu__change--active {
    background-color: $main-color;
    color: $label-white;
  }
}

main {
  margin: -32px 100px 100px 100px;
  //font-family: $font-en;
  font-weight: 600;
  color: $gray-08;
  font-size: 18px;
  letter-spacing: 1px;
}
.y-main {
  margin: 100px auto;
  color: $gray-08;
}

.y-change__container {
  li {
    cursor: pointer;
  }
}

.y-app__footer {
  span {
    transition: all 0.2s ease;
  }
  svg {
    transition: all 0.2s ease;
  }
  &:hover {
    span {
      color: $main-color;
    }
    svg {
      fill: $main-color;
    }
  }
}

.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

@keyframes title-blink {
  0% {
    text-shadow: none;
  }
  100% {
    text-shadow: 0 0 4px #fff, 0 0 8px #fff, 0 0 12px #fff, 0 0 16px $main-color;
  }
}
</style>
