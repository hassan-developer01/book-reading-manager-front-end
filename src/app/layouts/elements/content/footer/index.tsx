function Footer() {
  const date = new Date;
  const year = date.getFullYear();

  return (
    <footer id="pageFooter">
      <div>
        <strong dir="ltr"><small>{year}&copy;</small></strong>
        <strong className="mx-1"><small> تمامی حقوق محفوظ می‌باشد. </small></strong>
      </div>
    </footer>
  )
}

export default Footer