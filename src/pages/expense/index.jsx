export const Expense = () => {
    return (
    <div className="expense">
        <div className="container">
            <h1>Expense Tracker</h1>
            <div className="balance">
                <h3>Your Balance</h3>
                <p>$0.00</p>
            </div>

            <div className="summary">
                <div className="income">
                    <h3>Income</h3>
                    <p>$0.00</p>
                </div>  
                <div className="expenses">
                    <h3>Expenses</h3>
                    <p>$0.00</p>
                </div>
            </div>

            <form className="transaction">
                <input type="text" placeholder="Description" required />
                {' '}
                <input type="text" placeholder="Amount" required />
                <div>
                    <input type="radio" id="expense" value="expense" />
                    <label>Expense</label>
                </div>
                <div>
                    <input type="radio" id="income" value="Income" />
                    <label>Income</label>
                </div>
                
                <button type="submit"> Add Transaction</button>
            </form>
        </div>
    </div>
    )
    
}