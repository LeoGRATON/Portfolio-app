import '../../../styles/index.scss'

const WorkInfo = ({nomInfo, children}) => {

  return (
        <div className='work-info-card'>
            <span>{nomInfo}</span>
            <p>{children}</p>
        </div>
  );
};

export default WorkInfo;