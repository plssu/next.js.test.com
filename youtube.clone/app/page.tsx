import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/counter/button";
import Inputext from "./components/inputtext/inputext";
import Todo from "./components/Todo/Todo";
import { CustomButton } from "./components/CustomButton/CustomButton";
import { CoursesList } from "./components/CoursesList/CoursesList";
import { BypassCard } from "./components/BypassCard/BypassCard";
import Checkbox from "./components/Checkbox/Ceckbox";

export default function Home() {
  return (
    <main className={styles.main}>
      <CoursesList />
      <CustomButton />  
        <h1>3 tviani kursi</h1>
        <button title='kursis shedzena' />Buy course
      <div className={styles.center}> 

        <div>
          <Button />
        </div>
        {/* <div>
          <ButtonImage />
        </div> */}
        <div>
          <Inputext />
        </div>
        <div>
          <Todo />
        </div>
        <div>
          <Checkbox />
        </div>
        <div className={styles.grid}>
          <div><BypassCard /></div>
          <div><BypassCard /></div>
          <div><BypassCard /></div>
        </div>
      
      </div>
    </main>
  );
}
