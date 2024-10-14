"use client"

import { motion } from "framer-motion";
import Test from "../components/Test";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import Search from "@/components/Search";
import { useResponseContext } from "@/contexts/ResponseContextProvider";

export default function Home() {
  const text = `Lorem ipsum odor amet, consectetuer adipiscing elit. Consequat vulputate erat nisl litora libero suspendisse tempor convallis. Quis lorem quis congue elementum maximus est. Tortor class nisi vulputate velit suscipit, quis volutpat interdum ridiculus. Ad risus vestibulum litora magna viverra facilisi convallis. Dictum urna metus nunc pulvinar ex, turpis pulvinar fusce. Arcu fermentum curae ultricies congue mus blandit. Scelerisque laoreet feugiat penatibus adipiscing mauris auctor nam. Malesuada scelerisque neque auctor faucibus semper ad cursus. Odio aenean luctus praesent tellus taciti
                Morbi ridiculus netus venenatis, iaculis litora inceptos sed purus. Dapibus auctor hac eget proin eros ac porta blandit per. Et bibendum tempus platea; varius semper ex lorem consequat. Ex arcu turpis rhoncus purus hac, semper dapibus non. Parturient dis nibh nibh tristique primis. Himenaeos nisi potenti fusce m`
  const title = "title"

  const { response } = useResponseContext()
  const testArr = [<Card text={text} title={title} />, <Card text={text} title={title} />, <Card text={text} title={title} />]

  const fadeInAnimationVariants = {
    initial: { 
      opacity: 0, y: 100
    },
    animate: (idx: number) => ({
      opacity: 1, y: 0, 
      transition: { delay: 0.05 * idx }
    })
  } 

  return (
    <section className="flex justify-center">
      <div className="flex flex-col justify-center space-y-2">
        <motion.div initial={{ y: -100, x: "-50%", opacity: 0 }} animate={{ y: 0, x: "-50%", opacity: 1 }}>
          <Search />
        </motion.div>
      <div className="flex justify-center space-x-4">
      {
      response?.source_nodes.map((node, index) => (<motion.div key={index} variants={fadeInAnimationVariants}>
          <Card text={node.node.text} title={`${node.node.metadata.file_name} page ${node.node.metadata.page_label}`}/>
        </motion.div>))}
      </div>
      </div>
    </section>
  );
}
