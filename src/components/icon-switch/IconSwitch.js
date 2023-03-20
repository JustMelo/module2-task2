export default function IconSwitch (props) {

  const {icon, onSwitch} = props;

  return (
    <div className="switch-button">
       <span className="material-icons" data-type={icon} onClick={onSwitch()}>{icon}</span>
    </div>
  )
}