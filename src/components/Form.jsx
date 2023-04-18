import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function App() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.post('https://643ee3f7b9e6d064beea297a.mockapi.io/test', data)
        alert ('Форма отправлена!')
    }

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className="row row-cols-1 text-center justify-content-center">
            <h1 className='fs-3 text-center fw-bold'>Заполните заявку на обратную связь</h1>
            <div className='w-50 p-3'>
                <form id="form" onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInputGroup1" placeholder="lastName" {...register("lastName", { required: true })} />
                        {errors.lastName && <span> Данное поле не может быть пустым!!! </span>}
                        <label for="floatingInput">Фамилия</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInputGroup1" placeholder="name" {...register("name", { required: true })} />
                        {errors.name && <span> Данное поле не может быть пустым!!! </span>}
                        <label for="floatingInput">Имя</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInputGroup1" placeholder="patronymic" {...register("patronymic", { required: true })} />
                        {errors.patronymic && <span> Данное поле не может быть пустым!!! </span>}
                        <label for="floatingInput">Отчество</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInputGroup1" placeholder="mail" {...register("mail", { required: true })} />
                        {errors.mail && <span> Данное поле не может быть пустым!!! </span>}
                        <label for="floatingInput">Email</label>
                    </div>

                    <button type="submit" className='btn btn-outline-info'>Отправить</button>
                </form>
            </div>
        </div>
    );
}