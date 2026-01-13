import React, { useState } from 'react';

function ItemListContainer ({ text })
{
	return(
	    <div className="blocks-container">
            <div className="block-item">{text}</div>
		</div>
	);
};

export default ItemListContainer;