import BoardCard from "./BoardCard";
import NewBoardForm from "./NewBoardForm";

const BoardList: React.FC = () => {
  return (
    <section>
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <NewBoardForm />
    </section>
  );
};

export default BoardList;
