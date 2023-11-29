/*
 * @Author: weisheng
 * @Date: 2023-09-25 17:28:12
 * @LastEditTime: 2023-11-27 17:32:58
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: \wot-design-uni\src\uni_modules\wot-design-uni\global.d.ts
 * 记得注释
 */
// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // Helper for Volar
  export interface GlobalComponents {
    WdActionSheet: typeof import('./components/wd-action-sheet/wd-action-sheet.vue')['default']
    WdBadge: typeof import('./components/wd-badge/wd-badge.vue')['default']
    WdButton: typeof import('./components/wd-button/wd-button.vue')['default']
    WdCalendar: typeof import('./components/wd-calendar/wd-calendar.vue')['default']
    WdCalendarView: typeof import('./components/wd-calendar-view/wd-calendar-view.vue')['default']
    WdCard: typeof import('./components/wd-card/wd-card.vue')['default']
    WdCell: typeof import('./components/wd-cell/wd-cell.vue')['default']
    WdCellGroup: typeof import('./components/wd-cell-group/wd-cell-group.vue')['default']
    WdCheckbox: typeof import('./components/wd-checkbox/wd-checkbox.vue')['default']
    WdCheckboxGroup: typeof import('./components/wd-checkbox-group/wd-checkbox-group.vue')['default']
    WdCol: typeof import('./components/wd-col/wd-col.vue')['default']
    WdColPicker: typeof import('./components/wd-col-picker/wd-col-picker.vue')['default']
    WdCollapse: typeof import('./components/wd-collapse/wd-collapse.vue')['default']
    WdCollapseItem: typeof import('./components/wd-collapse-item/wd-collapse-item.vue')['default']
    WdConfigProvider: typeof import('./components/wd-config-provider/wd-config-provider.vue')['default']
    WdCurtain: typeof import('./components/wd-curtain/wd-curtain.vue')['default']
    WdDatetimePicker: typeof import('./components/wd-datetime-picker/wd-datetime-picker.vue')['default']
    WdDatetimePickerView: typeof import('./components/wd-datetime-picker-view/wd-datetime-picker-view.vue')['default']
    WdDivider: typeof import('./components/wd-divider/wd-divider.vue')['default']
    WdDropMenu: typeof import('./components/wd-drop-menu/wd-drop-menu.vue')['default']
    WdDropMenuItem: typeof import('./components/wd-drop-menu-item/wd-drop-menu-item.vue')['default']
    WdGrid: typeof import('./components/wd-grid/wd-grid.vue')['default']
    WdGridItem: typeof import('./components/wd-grid-item/wd-grid-item.vue')['default']
    WdIcon: typeof import('./components/wd-icon/wd-icon.vue')['default']
    WdImg: typeof import('./components/wd-img/wd-img.vue')['default']
    WdImgCropper: typeof import('./components/wd-img-cropper/wd-img-cropper.vue')['default']
    WdInput: typeof import('./components/wd-input/wd-input.vue')['default']
    WdInputNumber: typeof import('./components/wd-input-number/wd-input-number.vue')['default']
    WdLoading: typeof import('./components/wd-loading/wd-loading.vue')['default']
    WdLoadmore: typeof import('./components/wd-loadmore/wd-loadmore.vue')['default']
    WdMessageBox: typeof import('./components/wd-message-box/wd-message-box.vue')['default']
    WdModal: typeof import('./components/wd-overlay/wd-overlay.vue')['default']
    WdNoticeBar: typeof import('./components/wd-notice-bar/wd-notice-bar.vue')['default']
    WdPagination: typeof import('./components/wd-pagination/wd-pagination.vue')['default']
    WdPicker: typeof import('./components/wd-picker/wd-picker.vue')['default']
    WdPickerView: typeof import('./components/wd-picker-view/wd-picker-view.vue')['default']
    WdPopover: typeof import('./components/wd-popover/wd-popover.vue')['default']
    WdPopup: typeof import('./components/wd-popup/wd-popup.vue')['default']
    WdProgress: typeof import('./components/wd-progress/wd-progress.vue')['default']
    WdRadio: typeof import('./components/wd-radio/wd-radio.vue')['default']
    WdRadioGroup: typeof import('./components/wd-radio-group/wd-radio-group.vue')['default']
    WdRate: typeof import('./components/wd-rate/wd-rate.vue')['default']
    WdResize: typeof import('./components/wd-resize/wd-resize.vue')['default']
    WdRow: typeof import('./components/wd-row/wd-row.vue')['default']
    WdSearch: typeof import('./components/wd-search/wd-search.vue')['default']
    WdSelectPicker: typeof import('./components/wd-select-picker/wd-select-picker.vue')['default']
    WdSlider: typeof import('./components/wd-slider/wd-slider.vue')['default']
    WdSortButton: typeof import('./components/wd-sort-button/wd-sort-button.vue')['default']
    WdStatusTip: typeof import('./components/wd-status-tip/wd-status-tip.vue')['default']
    WdStep: typeof import('./components/wd-step/wd-step.vue')['default']
    WdSteps: typeof import('./components/wd-steps/wd-steps.vue')['default']
    WdSticky: typeof import('./components/wd-sticky/wd-sticky.vue')['default']
    WdStickyBox: typeof import('./components/wd-sticky-box/wd-sticky-box.vue')['default']
    WdSwipeAction: typeof import('./components/wd-swipe-action/wd-swipe-action.vue')['default']
    WdSwitch: typeof import('./components/wd-switch/wd-switch.vue')['default']
    WdTab: typeof import('./components/wd-tab/wd-tab.vue')['default']
    WdTabs: typeof import('./components/wd-tabs/wd-tabs.vue')['default']
    WdTag: typeof import('./components/wd-tag/wd-tag.vue')['default']
    WdToast: typeof import('./components/wd-toast/wd-toast.vue')['default']
    WdTooltip: typeof import('./components/wd-tooltip/wd-tooltip.vue')['default']
    WdTransition: typeof import('./components/wd-transition/wd-transition.vue')['default']
    WdUpload: typeof import('./components/wd-upload/wd-upload.vue')['default']
    WdNotify: typeof import('./components/wd-notify/wd-notify.vue')['default']
    WdWatermark: typeof import('./components/wd-watermark/wd-watermark.vue')['default']
    WdCircle: typeof import('./components/wd-circle/wd-circle.vue')['default']
    WdSwiper: typeof import('./components/wd-swiper/wd-swiper.vue')['default']
    WdSwiperNav: typeof import('./components/wd-swiper-nav/wd-swiper-nav.vue')['default']
    WdSegmented: typeof import('./components/wd-segmented/wd-segmented.vue')['default']
    WdTabbar: typeof import('./components/wd-tabbar/wd-tabbar.vue')['default']
    WdTabbarItem: typeof import('./components/wd-tabbar-item/wd-tabbar-item.vue')['default']
    WdNavbar: typeof import('./components/wd-navbar/wd-navbar.vue')['default']
    WdNavbarCapsule: typeof import('./components/wd-navbar-capsule/wd-navbar-capsule.vue')['default']
    WdTable: typeof import('./components/wd-table/wd-table.vue')['default']
    WdTableCol: typeof import('./components/wd-table-col/wd-table-col.vue')['default']
    WdSidebar: typeof import('./components/wd-sidebar/wd-sidebar.vue')['default']
    WdSidebarItem: typeof import('./components/wd-sidebar-item/wd-sidebar-item.vue')['default']
    WdFab: typeof import('./components/wd-fab/wd-fab.vue')['default']
    WdCountDown: typeof import('./components/wd-count-down/wd-count-down.vue')['default']
    WdNumberKeyboard: typeof import('./components/wd-number-keyboard/wd-number-keyboard.vue')['default']
  }
}

export {}
