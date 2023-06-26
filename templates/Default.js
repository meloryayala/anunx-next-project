import Footer from '../src/components/Footer'
import Header from '../src/components/Header'

const Default = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Default