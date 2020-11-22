import {
    INavigationOption, INavItemOption, INavTrackBarOption
} from "../../../config/Configs"

export const appNavItems: INavItemOption[] = [
    {
        text: '雪泥鸿爪'
    },
    {
        text: '锦囊玉轴'
    },
    {
        text: '似曾相识'
    },
    {
        text: '改弦易调'
    },
    {
        text: '雪中送碳'
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
