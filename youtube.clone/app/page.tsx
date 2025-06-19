import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/counter/button";
import Inputext from "./components/inputtext/inputext";
import Todo from "./components/Todo/Todo";
import { CustomButton } from "./components/CustomButton/CustomButton";
import { CoursesList } from "./components/CoursesList/CoursesList";
import { BypassCard } from "./components/BypassCard/BypassCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <CoursesList />
      <CustomButton />  
        <h1>3 tviani kursi</h1>
        <button 
        title='kursis shedzena' 
        icon="icon.png" 
        />
      <div className={styles.center}> 

        <div>
          <Button />
        </div>
        <div>
          <Inputext />
        </div>
        <div>
          {/* <Todo /> */}
        </div>
        <BypassCard />
      </div>
    </main>
  );
}
