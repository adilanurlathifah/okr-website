import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import {
  TPagination,
  TDropdown,
  TTable,
  TModal,
  TTag,
  TAlert,
} from 'vue-tailwind/dist/components'

const settings = {
  't-pagination': {
    component: TPagination,
    props: {
      classes: {
        wrapper: 'table border-collapse text-center bg-white shadow-sm',
        element: 'w-8 h-8 border border-gray-200 table-cell hover:border-gray-100',
        activeElement: 'w-8 h-8 border border-gray-200 border-gray-500 table-cell hover:border-gray-600',
        disabledElement: 'w-8 h-8 border border-gray-200 table-cell',
        ellipsisElement: 'w-8 h-8 border border-gray-200 hidden md:table-cell',
        activeButton: 'bg-black w-full h-full text-white hover:bg-gray-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-gray-500 focus:outline-none focus:ring-opacity-50',
        disabledButton: 'opacity-25 w-full h-full cursor-not-allowed transition duration-100 ease-in-out',
        button: 'hover:bg-gray-100 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-gray-500 focus:outline-none focus:ring-opacity-50',
        ellipsis: ''
      },
      variants: {}
    }
  },
  't-dropdown': {
    component: TDropdown,
    props: {
      fixedClasses: {
        button: 'flex items-center text-gray-700 block w-full h-[45px] px-6 py-2 transition duration-100 ease-in-out border border-gray-300 rounded-md disabled:cursor-not-allowed',
        wrapper: 'inline-flex flex-col',
        dropdownWrapper: 'relative z-10',
        dropdown: 'origin-top-right absolute right-0 w-56 rounded shadow',
        enterClass: 'opacity-0 scale-95',
        enterActiveClass: 'transition transform ease-out duration-100',
        enterToClass: 'opacity-100 scale-100',
        leaveClass: 'opacity-100 scale-100',
        leaveActiveClass: 'transition transform ease-in duration-75',
        leaveToClass: 'opacity-0 scale-95'
      },
      classes: {
        button: 'bg-gray-50',
        dropdown: 'bg-white'
      },
      variants: {
        dark: {
          button: 'bg-black text-sm text-white',
          dropdown: 'bg-white text-sm text-white'
        }
      }
    }
  },
  // 't-table': {
  //   component: TTable,
  //   props: {
  //     classes: {
  //       table: 'min-w-full divide-y divide-gray-100 shadow-sm border-gray-200 border',
  //       thead: '',
  //       theadTr: '',
  //       theadTh: 'text-center px-3 py-2 text-sm font-semibold bg-gray-50 border-b',
  //       tbody: 'bg-white text-sm divide-y divide-gray-100',
  //       tr: '',
  //       td: 'px-3 py-3 whitespace-no-wrap text-center',
  //       tfoot: '',
  //       tfootTr: '',
  //       tfootTd: ''
  //     },
  //   }
  // },
  't-modal': {
    component: TModal,
    props: {
      classes: {
          overlay: 'z-40 bg-black bg-opacity-50',
          wrapper: 'z-50 max-w-lg px-3 py-12',
          modal: 'bg-white shadow rounded-md mt-30',
          body: 'p-3',
          header: 'text-center font-semibold text-xl border-b border-gray-100 p-3 rounded-t',
          footer: 'bg-gray-100 p-3 rounded-b',
          close: 'bg-gray-100 text-gray-600 rounded-full absolute right-0 top-0 -m-3 h-8 w-8 transition duration-100 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
          closeIcon: 'fill-current h-4 w-4',
          overlayEnterClass: 'opacity-0',
          overlayEnterActiveClass: 'transition ease-out duration-100',
          overlayEnterToClass: 'opacity-100',
          overlayLeaveClass: 'opacity-100',
          overlayLeaveActiveClass: 'transition ease-in duration-75',
          overlayLeaveToClass: 'opacity-0',
          enterClass: '',
          enterActiveClass: '',
          enterToClass: '',
          leaveClass: '',
          leaveActiveClass: '',
          leaveToClass: '',
      }
    }
  },
  't-alert': {
    component: TAlert,
    props: {
      fixedClasses: {
        wrapper: 'relative flex items-center p-4 border-l-4  rounded shadow-sm',
        body: 'flex-grow',
        close: 'absolute relative flex items-center justify-center ml-4 flex-shrink-0 w-6 h-6 transition duration-100 ease-in-out rounded  focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
        closeIcon: 'fill-current h-4 w-4'
      },
      classes: {
        wrapper: 'bg-blue-50 border-blue-500',
        body: 'text-blue-700',
        close: 'text-blue-500 hover:bg-blue-200'
      },
      variants: {
        danger: {
          wrapper: 'bg-red-50 border-red-500',
          body: 'text-red-700',
          close: 'text-red-500 hover:bg-red-200'
        },
        success: {
          wrapper: 'bg-green-50 border-green-500',
          body: 'text-green-700',
          close: 'text-green-500 hover:bg-green-200'
        }
      }
    }
  },
  't-tag': {
    component: TTag,
    props: {
      classes: '',
      variants: {
        success: 'inline-flex items-center w-auto px-4 py-1 rounded-full text-xs font-medium leading-2 bg-green-100 text-green-800',
        danger: 'inline-flex items-center w-auto px-4 py-1 rounded-full text-xs font-medium leading-2 bg-red-100 text-red-800'
      }
    }
  }
}

Vue.use(VueTailwind, settings)
