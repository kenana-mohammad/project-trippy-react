import { useState } from "react"
import "./Navbar.css"
//رح اعمل نافبار ديناميكية في حال احتجتا بمشروع تاني نفسا كشكل بس غير كحتوى
export default function Navbar({logo,Navitems,btn}) {
  // منعمل usestate لاضافة وتغغيير قيمة
  //القيمة الافتراضية false
  const [menuActive,setmenueActive] = useState(false);
  return (
    <>
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
        {/* اذا ضغطت جبلي تابع الstate لبي بفير وخليع عكس القيمة السابقة 
        ووفرت وقت بدب مااعمل ب js classlist add
        ,remove
        
        */}
        <button className="menu-btn" onClick={()=>setmenueActive(prev => !prev) }> 
         {/*لما بتكونtrueاظهر الايقونة اكس
         
         ولما بترجع  falseاظهر list*/}
        <i className={(menuActive)?"fa-solid fa-xmark":"fa-solid fa-list"}></i>
        {/* <i className="fa-solid fa-list"></i> */}
              </button> 
          </nav>
          {/* اذا موجودة القيمة يعني اذا true 
          
        طبق كلاسين والا اذا flase كلاس واحد */}
        {/* لي بحدد هالشي الزر */}
       <div className={(menuActive) ? "nav-menu active" :"nav-menu"}>
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
    </>
    
  )
}
