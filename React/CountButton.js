import React, { useState } from 'react'
import './CountButton.css'
/* Hook ช่วยให้มีการเปลี่ยนแปลงทำการ render หน้าใหม่อีกครั้งทำให้ค่า update ได้ */
const CountButton = (props) => {                   /* 0 เป็นค่าที่เราต้องการกำหนดให้กับ CurrentCount ในกรณีอยากให้เริ่มที่ 0 */
    /* obj ที่ pass เข้ามาจะใช้คำว่า props */
    const [currentCount, setCurrentCount] =  useState(0) /* ใช้ Hook */

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
        /* value ใน tag div ไม่เปลี่ยนแปลงจำเป็นต้องใช้ hook */     
    }
/*     const buttonStyle = {
        background: props.buttonColor,
        borderRadius: props.borderRadius,
    }
 We still can use outer style*/    
        return (
        <div>
{/*             <button style={buttonStyle} onClick = {handleClick}>
 */}                
            <button onClick = {handleClick}>
            +{props.incrementBy}
            </button>
            {/* ถ้าข้างในเป็น String ไม่ต้องมี {} ก็ได้ */}
            <div className = 'count-display'>{currentCount}</div>
        </div>    
    )
}

export default CountButton
