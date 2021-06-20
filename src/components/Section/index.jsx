import classNames from "classnames"

function Section(props) {
  return (
   <section style={props.style} className={classNames(props.className,{'section_white': props.white})}>

     {!props.notcont ?
      (<div className="container">
      {props.children}
     </div>)
      : props.children}
   </section>
  )
}

export default Section
