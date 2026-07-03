<template>
      <aside class="aside">
         <div class="aside__profile">
            <div
               class="aside__avatar"
               aria-hidden="true"
            ></div>
            <span class="aside__profile-name">Гость</span>
         </div>

         <nav
            class="aside__nav"
            aria-label="Основная навигация"
         >
            <NuxtLink
               v-for="link in links"
               :key="link.title"
               class="aside__link"
               :class="{ 'aside__link--active': isLinkActive(link) }"
               :to="link.to"
               :aria-label="link.title"
               :title="link.title"
            >
               <svg
                  class="aside__link-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
               >
                  <path
                     :d="link.icon"
                     :fill-rule="link.fillRule"
                     :clip-rule="link.fillRule"
                  />
               </svg>
               <span class="aside__link-title">{{ link.title }}</span>
            </NuxtLink>
         </nav>
      </aside>
</template>

<script lang="ts" setup>
type AsideLink = {
   title: string;
   to: string;
   icon: string;
   fillRule?: 'evenodd';
};

// контент ссылок
const links = [
   {
      title: 'Получение субтитров',
      to: '/subtitres',
      icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm-1 7V3.5L18.5 9H13ZM8 13h8v2H8v-2Zm0 4h8v2H8v-2Zm0-8h3v2H8V9Z',
   },
   {
      title: 'Скачивание видео',
      to: '/download',
      icon: 'M17 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4.5l4 4v-11l-4 4ZM15 18H5V6h10v12Z',
   },
   {
      title: 'История',
      to: '/history',
      icon: 'M13 3a9 9 0 1 1-8.53 6.16l-2.18 2.18L1 10.05 5.55 5.5 10.1 10.05 8.81 11.34 6.4 8.93A7 7 0 1 0 13 5V3Zm-1 4h1.5v5.25l4 2.38-.75 1.23L12 13V7Z',
   },
   {
      title: 'Конспектация',
      to: '/summary',
      icon: 'M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h4.5L14 3.5ZM8 12h8v2H8v-2Zm0 4h8v2H8v-2Zm0-8h4v2H8V8Z',
   },
   {
      title: 'Личный кабинет',
      to: '/profile',
      icon: 'M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z',
   },
   {
      title: 'О сервисе',
      to: '/',
      icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm-1 7h2v6h-2v-6Zm0-4h2v2h-2V7Z',
      fillRule: 'evenodd',
   },
   {
      title: 'Настройки',
      to: '/settings',
      icon: 'M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a7.28 7.28 0 0 0-1.69-.98L14.5 2.42A.5.5 0 0 0 14 2h-4a.5.5 0 0 0-.49.42L9.13 5.07c-.61.24-1.18.56-1.69.98l-2.49-1a.5.5 0 0 0-.61.22l-2 3.46a.5.5 0 0 0 .12.64l2.11 1.65c-.04.32-.07.65-.07.98s.02.66.07.98l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.14.24.42.34.68.22l2.42-1c.51.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.49.42h4c.24 0 .45-.18.49-.42l.38-2.65c.61-.25 1.18-.58 1.69-.98l2.42 1c.26.12.54.02.68-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7Z',
   },
] satisfies AsideLink[];

const route = useRoute();

//активный заголовок ссылки
const activeLinkTitle = computed(() => {
   const exactLink = links.find((link) => link.to === route.path);
   if (exactLink) {
      return exactLink.title;
   }
   return links.find((link) => link.to !== '/' && route.path.startsWith(`${link.to}/`))?.title;
});
// активная ссылка
const isLinkActive = (link: AsideLink) => link.title === activeLinkTitle.value;
</script>

<style scoped>
.aside {
   position: sticky;
   z-index: 20;
   top: 0;
   display: flex;
   flex: 0 0 220px;
   flex-direction: column;
   width: 220px;
   height: 100dvh;
   padding: 24px 14px;
   border-right: 1px solid var(--color-primary);
   background-color: transparent;
}

.aside__profile {
   display: flex;
   min-width: 0;
   height: 48px;
   align-items: center;
   gap: 12px;
   margin-bottom: 14px;
}

.aside__avatar {
   flex: 0 0 29px;
   width: 29px;
   height: 29px;
   border: 1px solid var(--color-primary);
   border-radius: 50%;
   background:
      radial-gradient(circle at 32% 28%, var(--color-white) 0 6%, transparent 7%),
      linear-gradient(135deg, var(--color-primary), var(--color-text-secondary) 58%, var(--color-secondary-hover));
}

.aside__profile-name,
.aside__link-title {
   min-width: 0;
   overflow: hidden;
   opacity: 1;
   white-space: nowrap;
}

.aside__profile-name {
   max-width: 170px;
   color: var(--color-text-primary);
   font-size: 18px;
   line-height: 1.2;
}

.aside__nav {
   display: flex;
   flex-direction: column;
   height: 100%;
}

.aside__link {
   display: flex;
   min-width: 0;
   height: 46px;
   align-items: center;
   gap: 9px;
   border-radius: 8px;
   color: var(--color-text-primary);
   transition: background-color 0.2s ease, color 0.2s ease;
   padding: 0 8px;
}

.aside__link:hover,
.aside__link--active {
   background-color: var(--color-secondary-hover);
   color: var(--color-primary);
}

.aside__link:last-child {
   margin-top: auto;
}

.aside__link-icon {
   flex: 0 0 20px;
   width: 44px;
   height: 24px;
   fill: currentColor;
}

.aside__link-title {
   max-width: 190px;
   color: currentColor;
   font-size: 14px;
   line-height: 1.2;
}
</style>
