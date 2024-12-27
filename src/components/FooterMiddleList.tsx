import React from 'react';

// Define the structure of the data
interface ListData {
  listData: string[];
}

interface Props {
  title: string;
  listItem: ListData[];
}

function FooterMiddleList({ title, listItem }: Props) {
  return (
    <div>
      <h3 className="text-white font-semibold text-base mb-3">{title}</h3>
      <ul className="flex flex-col gap-0.5">
        {listItem.map((val, index) => (
          val.listData.map((data, dataIndex) => (
            <li key={`${data}-${index}-${dataIndex}`} className="footerLink">
              {data}
            </li>
          ))
        ))}
      </ul>
    </div>
  );
}

export default FooterMiddleList;
