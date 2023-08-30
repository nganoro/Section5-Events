import './ExpenseForm.css';
import { useForm, userForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { number, string, z } from "zod";
import { useState } from 'react';
import { DevTool, Devtool } from '@hookform/devtools';

const schema = z.object({
    title: z.string(),
    amount: z.string(),
    date: z.string(),
})

function ExpenseForm (props) {

    const { register, control, handleSubmit, formState } = useForm({
        resolver: zodResolver(schema),
        // defaultValues: {
        //     enteredTitle: '',
        //     enteredAmount: '',
        //     enteredDate: ''
        // }
    });
    // const [ enteredTitle, setEnteredTitle ] = useState('Test Title');
    const { errors } = formState;

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        //method below is the most accurate data wise
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.targer.value}
        });
    }

    const onSubmit = (data) => {
        props.onSaveExpenseData(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='new-expense__controls'>
                    <div className="new-expense__controls">
                        <label>Title</label>
                        <input 
                            type='text'
                            {...register("title",
                            {
                                required: true,
                            }
                            )}/>
                        <div style={{ color: "red" }}>{errors.name?.message}</div>
                    </div>
                    <div className='new-expense__controls'>
                        <label>Amount</label>
                        <input 
                            type='number' 
                            {...register('amount')}
                             />
                        <div style={{ color: "red" }}>{errors.amount?.message}</div>
                    </div>
                    <div className='new-expense__controls'>
                        <label>Date</label>
                        <input
                            type='date'
                            {...register('date')}
                            min='2019-01-01'
                            max='2022-12-31'
                            />
                        <div style={{ color: "red" }}>{errors.date?.message}</div>
                    </div>
                    <div className="new-expense__actions">
                        <button type="button" onClick={props.onCancel}>Cancel</button>
                        <button type="submit">Add Expense</button>
                    </div>
                </div>
                <p>{errors.title?.message}</p>
            </form>
            <DevTool control={control} />
        </div>
    )
}

export default ExpenseForm;