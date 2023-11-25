import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export const FormDataTable = ({
    arrayDataList,
    arrayColumns,
    actionButtonsDataTable,
    actionButtonsEstatus = false,
    ...props
}) => {
    return (
        <DataTable {...props} value={arrayDataList}>
            {arrayColumns.map(({ field, header, ...properties }, index) => {
                return (
                    <Column key={index} field={field} header={header} {...properties} />
                );
            })}
            {actionButtonsEstatus ? (
                <Column
                    body={actionButtonsDataTable}
                    exportable={false}
                    style={{ minWidth: "8rem" }}
                />
            ) : null}
        </DataTable>
    );
};
