const ModalTemplate = ({children, close} : any) => {
    return (
        <>
            <div className="modal__template">
            <div className="close" onClick={()=>close(false)}/>
                {children}
            </div>
        </>
    )
}

export default ModalTemplate