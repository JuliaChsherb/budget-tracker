function Welcome() {

  return (
    <div className="welcome-container">
      <section className="hero">
        <h1>Welcome to Budget Tracker</h1>
        <p>Take control of your finances with our easy-to-use budget tracking application</p>
      </section>

      <section className="features">
        <h2>Why Choose Budget Tracker?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Easy Tracking</h3>
            <p>Monitor your income and expenses in one place</p>
          </div>
          <div className="feature-card">
            <h3>Visual Reports</h3>
            <p>See your spending patterns with clear charts</p>
          </div>
          <div className="feature-card">
            <h3>Secure</h3>
            <p>Your financial data is protected and private</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Create your account</li>
          <li>Add your income and expenses</li>
          <li>Track your financial progress</li>
          <li>Achieve your savings goals!</li>
        </ol>
      </section>
    </div>
  )
}

export default Welcome