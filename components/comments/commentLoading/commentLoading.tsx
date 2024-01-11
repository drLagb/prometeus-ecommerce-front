const CommentLoading = () => {
  return (
    <div className="flex flex-wrap p-4 gap-4 animate-pulse select-none">
      <div className="flex justify-center">
        <div
          className="rounded-full w-14 h-14 bg-altBAckgroundColor"
        ></div>
      </div>
      <section className="h-full w-3/4">
        <h2 className="text-mainColor inline bg-mainColor rounded-2xl mr-3">comment </h2>
        <h3 className="inline bg-altBAckgroundColor text-altBAckgroundColor rounded-2xl">
          Lorem ipsum dolor sit a tjjscfsd
        </h3>
        <h3 className=" bg-altBAckgroundColor text-altBAckgroundColor rounded-2xl">
          Lorem ipsum dolor sit amet, consectetur
        </h3>
      </section>
    </div>
  );
};

export default CommentLoading;
