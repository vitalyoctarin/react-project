import React from 'react';
import '../css/MaxCard.css'

const MaxCard = ({children}) => {
    return (
        <div className="maxCard">
            <div className="card-title">
                {children}
            </div>
            <div className="card-body">
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
                    создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                    Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в
                    электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами
                    Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus
                    PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
            </div>
        </div>
    );
};

export default MaxCard;