import "./Navbar.css"
//رح اعمل نافبار ديناميكية في حال احتجتا بمشروع تاني نفسا كشكل بس غير كحتوى
export default function Navbar({logo,Navitems,btn}) {
  return (
    <nav>
        <h1>{logo}</h1>
        <div className="items">
        <ul>
            {Navitems.map((e,index)=>{return (
                <li key={index}> 
                <i className={e.icon}></i>
                {e.label}
                </li>  
                          )})}
        </ul>
        <button > {btn}</button>
        </div>
    </nav>
  )
}
