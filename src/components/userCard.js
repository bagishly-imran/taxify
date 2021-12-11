import React from 'react'

function UserCard({user}) {
    return (
        <div className="card user-card" key = {user.id}>
            <h5 className="card-header">{user.where_from} → {user.where}</h5>
            <div className="card-body">
                <h5 className="card-title m-0">Qiymet: {user.price} ₼</h5>
                <div className="card-body">
                    <h6 className="card-text">{user.category == "1" ? "Sürücü:" : "Müştəri"} {user.name}</h6>
                    <h6 className="card-text">Çıxış saatı: {user.hour}</h6>
                </div>
                <a href={`tel:994${user.tel}`} className="btn btn-outline-success d-block">Elaqe</a>
            </div>
        </div>
    )
}

export default UserCard;
