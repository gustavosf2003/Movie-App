import './styles/footer.css'
function Footer() {
    const year = new Date().getFullYear()
    return(
        <footer className="footer">
            <p>©{year}</p>
        </footer>
    )
}
export default Footer