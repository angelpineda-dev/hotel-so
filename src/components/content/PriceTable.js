const PriceTable = ({ size, price }) => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col" colSpan={2}>
            Habitación {size}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th sope="row">Temporada baja</th>
          <td>${price.low} MXN</td>
        </tr>
        <tr>
          <th scope="row">Temporada media</th>
          <td>${price.medium} MXN</td>
        </tr>
        <tr>
          <th scope="row">Temporada alta</th>
          <td>${price.high} MXN</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PriceTable;
