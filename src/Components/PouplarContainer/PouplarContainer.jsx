import "./PouplarContainer.css"
const PouplarContainer = ({title,desc,firstImg,secImg,reverse}) => {
  return (
    <div className={`container ${reverse}`}>
          <div className="txt">
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
          <div className="imagees">
            {/* تضمين الصورة طريقة تانية لان مسار الصورة ضمن مجلدpuplic */}
            <img src={firstImg} alt="" /><img src={secImg} alt="" />
          </div>
    </div>
  )
}

export default PouplarContainer