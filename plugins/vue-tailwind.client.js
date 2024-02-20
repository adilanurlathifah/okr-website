import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import {
  TPagination,
  TDropdown
} from 'vue-tailwind/dist/components'

const settings = {
  't-pagination': {
    component: TPagination,
    props: {
      classes: {
        wrapper: 'table border-collapse text-center bg-white mx-auto shadow-sm',
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
        button: 'flex items-center text-gray-700 block w-full h-[45px] px-4 py-2 transition duration-100 ease-in-out border border-gray-300 rounded-md disabled:cursor-not-allowed',
        wrapper: 'inline-flex flex-col',
        dropdownWrapper: 'relative z-10',
        dropdown: 'origin-top-left absolute left-0 w-56 rounded shadow',
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
      variants: {}
    }
  }
}

Vue.use(VueTailwind, settings)
