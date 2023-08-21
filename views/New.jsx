import React from 'react';

module.exports = function New() {
  return (
    <div>
        <h1>New Pokemon Entry Page</h1>
        <form action="/pokemon" method="POST">
            <label htmlFor="name">Pokemon Name: </label>
            <input name="name" type="text" />
            <br/>
            <label htmlFor="url">Pokemon Picture Url: </label>
            <input name="url" type="text" />
            <br/>
            <input type="submit" value="create a new Pokemon entry"/>
            <br/>
        </form>
    </div>
  );
};