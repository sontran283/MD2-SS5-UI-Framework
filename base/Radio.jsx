import { useState } from "react";

function Radio() {
    const lishGender = [
        {
            id: 0,
            title: "nam",
        },
        {
            id: 1,
            title: "nữ",
        },
        {
            id: 2,
            title: "khác",
        },
    ]
    const [value, setValu] = useState();
    console.log('value', value);

    const handleCheck = (id) => {
        //  cap nhat lai state de lay value cua checkbox
        setValu(id)
    }


    return (
        <>
            <div style={{ margin: 200 }}>
                {lishGender.map(gender => (
                    <div>
                        <label htmlFor="">{gender.title}</label>
                        <input
                            type="radio"
                            checked={value === gender.id}
                            onChange={(e) => handleCheck(gender.id)} />
                    </div>
                ))}

                {/* <div>
                    <label htmlFor="">nữ</label>
                    <input type="radio" id="female" name="gender" />
                </div>
                <div>
                    <label htmlFor="">khác</label>
                    <input type="radio" id="other" name="gender" />
                </div> */}
            </div>
        </>
    );
}

export default Radio;