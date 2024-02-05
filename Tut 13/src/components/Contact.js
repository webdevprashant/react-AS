const Contact = () => {
    return (
        <div className="flex p-4 m-4 justify-center items-center flex-col">
            <h1 className="text-3xl  p-4 m-4 font-bold rounded-lg">Contact Page...</h1>
            <form className="">
                <input type="text" className="border border-black p-2 m-2 outline-none rounded-lg" placeholder="Name" />
                <input type="text" className="border border-black p-2 m-2 outline-none rounded-lg" placeholder="message" />
                <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
            </form>
        </div>
    );
}
export default Contact;