import {
    INavigationOption, INavItemOption, INavTrackBarOption
} from "../../../config/Configs"

export const appNavItems: INavItemOption[] = [
    {
        text: '雪泥鸿爪',
        pageName: 'dreams'
    },
    {
        text: '锦囊玉轴',
        pageName: 'collection'
    },
    {
        text: '似曾相识',
        pageName: 'dejavu'
    },
    {
        text: '改弦易调',
        pageName: 'settings'
    },
    {
        text: '雪中送碳',
        pageName: 'aid'
    }
]

export const appNavTrackbarOption: INavTrackBarOption = {
    enable: true,
    stretch: false,
}

export const appNavigationOption: INavigationOption = {
    oriention: 'vertical',
    items: appNavItems,
    trackBarOption: appNavTrackbarOption,
}
