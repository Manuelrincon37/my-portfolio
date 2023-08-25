export const Contact = () => {
  return (
    <div className="page">
      <h1 className="heading">Contact</h1>
      <form className="contact" action="mailto:manuelrincon37@gmail.com">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="E-mail"/>
        <textarea type="text" placeholder="Reason of contact"/>
        <input type="submit" value='Send' />

      </form>

    </div>
  )
}
