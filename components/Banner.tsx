

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5">
        <div>
            <h1 className="text-7xl">Lakortus Blog</h1>
            <h2 className="mt-5 md:mt-0">
                Welcome to{" "}
                <span className="text-blue-500">Every Developers</span>
            </h2>
            Favourite Blog
        </div>
        <p className="mt-5 md:mt-2 max-w-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et aliquam voluptate cum facere perspiciatis unde saepe, sed exercitationem quibusdam quaerat inventore quae quidem non reprehenderit, eos nihil? Dolores, perferendis adipisci?</p>
    </div>
  )
}

export default Banner