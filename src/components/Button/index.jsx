import classNames from "classnames"


function Button({size, color, children, params}) {
  return (
    <button className={classNames('button', {
      'button_size-s': size === 's', 
      'button_size-m': size === 'm', 
      'button_size-l': size === 'l', 
      'button_color-w': color === 'w', 
    })} {...params}>{children}</button>
  )
}

export default Button
