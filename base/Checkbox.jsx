import { useState } from "react";

function Checkbox() {
    const lishJob = [
        {
            id: 0,
            job: " java backend developer",
        },
        {
            id: 1,
            job: " js backend developer",
        },
        {
            id: 2,
            job: " C# backend developer",
        },
        {
            id: 3,
            job: " Python backend developer",
        },
    ]
    //  mang chua danh sach cong viec duoc chon
    const [selectedJob, setSelectedJob] = useState([])
    console.log('selectedJob', selectedJob);

    // ham xu li checkbox
    const handleCheck = (id) => {
        if (selectedJob.includes(id)) {
            //  neu nhu id da ton tai trong mang, thi loc ra nhung gia tri khac voi id duoc check
            setSelectedJob(selectedJob.filter((job) => job !== id))
        } else {
            setSelectedJob([...selectedJob, id])
        }
    }

    return (
        <>
            <div style={{ margin: 200 }}>
                {lishJob.map((j) => (
                    <div>
                        <input
                            type="checkbox"
                            onChange={() => handleCheck(j.id)}
                            checked={selectedJob.includes(j.id)}
                        //  kiem tra xem thang nap da ton tai trong mang thi cho no check
                        />
                        {j.job}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Checkbox;