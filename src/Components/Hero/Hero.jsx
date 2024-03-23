import  "./Hero.css";
export default function Hero({img,title,desc,btn}) {
  return (
    <div className="hero">
<img src={img}/>
<div className="info">
    <h1>{title}</h1>
    <p>{desc}</p>
    <button>{btn}</button>
</div>
    </div>
  )
}
