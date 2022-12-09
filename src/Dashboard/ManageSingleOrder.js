import { toast } from 'react-toastify';

const ManageSingleOrder = ({ order, index, refetch, setDeleteOrder }) => {
    const { userName, name, status, _id } = order;

    const handleShiped = () => {
        fetch(`https://sa-manufacture-server-4jap.onrender.com/order/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('You have Successfully shiped the order')
                refetch()

            })
    }
    const handleDelete = () => {
        fetch(`https://sa-manufacture-server-4jap.onrender.com/order/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setDeleteOrder(null)
                    toast.success('You have Successfully Delete an unpaid  order')
                    refetch()
                }
            })

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{name}</td>
            <td>{status ? <p className='text-blue-500'>{status}</p> : <p className='text-red-500 '>Unpaid</p>}</td>
            <td>{status ? <button id='ship' onClick={handleShiped} di className="btn btn-sm btn-neutral">Shipping?</button> : <>
                {/* <label onClick={() => setDeleteOrder(order)} for="order-delete-confirmation" className="btn btn-sm">Delete</label> */}
                <button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm">Delete</button>
            </>}</td>
        </tr>
    );
};

export default ManageSingleOrder;