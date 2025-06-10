import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, delay = 0 }) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
    >
      <img src={project.image} alt={project.alt} />
      
      <div className={styles.info}>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        
        <div className={styles.buttons}>
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.viewLive}
          >
            View Live
          </a>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.githubRepo}
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;