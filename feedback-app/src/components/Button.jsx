import PropType from 'prop-types'

function Button({children, type, version, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    type: 'button',
    version: 'primary',
    isDisabled: false
}

Button.propTypes = {
    children: PropType.node.isRequired,
    type: PropType.string,
    version: PropType.string,
    isDisabled: PropType.bool,
}

export default Button