import { CharcoalAbstractTheme } from '@charcoal-ui/theme'
import { px } from '@charcoal-ui/utils'
import { Internal, createInternal } from './internal'
import { constFactory } from './lib'

export const createBorderRadiusCss =
  <T extends CharcoalAbstractTheme>(theme: T) =>
  (size: keyof T['borderRadius']): Internal => {
    return createInternal({
      toCSS() {
        return {
          borderRadius: px(theme.borderRadius[size]),
        }
      },
    })
  }

export default function borderRadius<T extends CharcoalAbstractTheme>(
  theme: T
) {
  // 角丸
  const borderRadiusCss = createBorderRadiusCss(theme)
  const borderRadiusObject = constFactory(
    {},
    {
      borderRadius: (radius: keyof T['borderRadius']) =>
        borderRadiusCss(radius),
    }
  )

  return borderRadiusObject
}
